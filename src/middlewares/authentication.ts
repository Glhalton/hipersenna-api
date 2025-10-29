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
    };
  }
}

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
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
      return reply.status(401).send({ message: "Token inválido ou expirado" });
    }

    request.user = decodedJwt as FastifyRequest["user"];
  } catch (err: any) {
    reply.status(401).send({ message: `Autenticação falhou: ${err.message}` });
  }
}