import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "./lib/prisma.js";
import jwt from "jsonwebtoken";
import validitiesRoutes from "./modules/validities/routes";
import userAuthRoutes from "./modules/auth/routes";
import bonusRoutes from "./modules/bonus/routes";
import productsRoutes from "./modules/products/routes";
import { validityRequestsRoutes } from "./modules/validityRequests/routes";
import usersRoutes from "./modules/users/routes.js";
import rolesRoutes from "./modules/roles/routes.js";
import permissionsRoutes from "./modules/permissions/routes.js";
import userAccessControlRoutes from "./modules/userAccessControl/routes.js";

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

async function authenticate(request: FastifyRequest, reply: FastifyReply) {
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
  } catch (err) {
    reply.status(401).send({ message: "Autenticação falhou" });
  }
}

export default async function (app: FastifyInstance) {
  app.register(userAuthRoutes, { prefix: "/auth" });
  //app.register(usersRoutes, {prefix: "/users"});

  app.register(async (protectedRoutes) => {
    protectedRoutes.addHook("preHandler", authenticate);

    protectedRoutes.register(usersRoutes, { prefix: "/users" });
    protectedRoutes.register(rolesRoutes, { prefix: "/roles" });
    protectedRoutes.register(permissionsRoutes, { prefix: "/permissions" });
    protectedRoutes.register(userAccessControlRoutes, { prefix: "/uac" });
    protectedRoutes.register(productsRoutes, { prefix: "/products" });
    protectedRoutes.register(validitiesRoutes, { prefix: "/validities" });
    protectedRoutes.register(validityRequestsRoutes, {
      prefix: "/validityRequests",
    });
    protectedRoutes.register(bonusRoutes, { prefix: "/bonus" });
  });
}
