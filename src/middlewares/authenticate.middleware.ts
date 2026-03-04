import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";

declare module "fastify" {
  export interface FastifyRequest {
    user?: {
      id: number;
      name: string;
      username: string;
      winthor_id: number;
      branch_id: number;
      iat: number;
      exp: number;
      permittedBranches?: number[];
    };
  }
}

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return reply.status(401).send({ message: "Token não fornecido!" });
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET não definido no .env");
    }

    const decodedJwt = jwt.verify(token, jwtSecret);

    const session = await prisma.hssessions.findUnique({
      where: { token },
    });

    if (typeof decodedJwt === "string" || !session) {
      return reply
        .status(401)
        .send({ message: "Token inválido ou sessão não encontrada" });
    }

    request.user = decodedJwt as FastifyRequest["user"];

    const branches = await prisma.hsemployee_branches.findMany({
      where: { employee_id: request.user?.id },
      select: { branch_id: true },
    });

    if (!request.user) {
      return reply.status(401).send({ message: "Usuário não autenticado" });
    }

    request.user.permittedBranches = branches.map((f) => f.branch_id);
  } catch (err: any) {
    return reply
      .status(401)
      .send({ message: `Autenticação falhou: ${err.message}` });
  }
}
