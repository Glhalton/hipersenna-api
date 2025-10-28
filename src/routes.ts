import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "./lib/prisma.js";
import jwt from "jsonwebtoken";
import signinRoutes from "./routes/signin.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";
import validitiesRoutes from "./routes/validities.routes.js";
import validityRequestsRoutes from "./routes/validityRequests.routes.js";
import bonusRoutes from "./routes/bonus.routes.js";
import permissionsRoutes from "./routes/permissions.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import userRolesRoutes from "./routes/userRoles.routes.js";
import rolesPermissionsRoutes from "./routes/rolesPermissions.routes.js";
import userPermissionsRoutes from "./routes/userPermissions.routes.js";

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
  } catch (err: any) {
    reply.status(401).send({ message: `Autenticação falhou: ${err.message}` });
  }
}

export default async function (app: FastifyInstance) {
  app.register(signinRoutes, { prefix: "/signin" });

  app.register(async (protectedRoutes) => {
    protectedRoutes.addHook("preHandler", authenticate);

    protectedRoutes.register(usersRoutes, { prefix: "/users" });
    protectedRoutes.register(rolesRoutes, { prefix: "/roles" });
    protectedRoutes.register(userRolesRoutes, { prefix: "/user-roles" });
    protectedRoutes.register(rolesPermissionsRoutes, { prefix: "/role-permissions" });
    protectedRoutes.register(userPermissionsRoutes, { prefix: "/user-permissions" });
    protectedRoutes.register(permissionsRoutes, { prefix: "/permissions" });
    protectedRoutes.register(productsRoutes, { prefix: "/products" });
    protectedRoutes.register(validitiesRoutes, { prefix: "/validities" });
    protectedRoutes.register(validityRequestsRoutes, {
      prefix: "/validity-requests",
    });
    protectedRoutes.register(bonusRoutes, { prefix: "/bonus" });
  });
}
