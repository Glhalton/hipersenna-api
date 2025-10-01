import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import validitiesRoutes from "./modules/validities/routes";
import { validityRequestsRoutes } from "./modules/validityRequests/routes";
import userAuthRoutes from "./modules/users/routes";
import bonusRoutes from "./modules/bonus/routes";
import jwt from "jsonwebtoken";
import { prisma } from "./lib/prisma.js"


declare module "fastify" {
    export interface FastifyRequest {
        user?: { id: number; name: string; username: string; winthor_id: number; branch_id: number; access_level: number; iat: number; exp: number }
    }
}

async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    try {
        const token = request.headers.authorization?.replace("Bearer ", "")

        if (!token) {
            return reply.status(401).send({ message: "Token não fornecido!" });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT_SECRET não definido no .env");
        }

        const decodedJwt = jwt.verify(token, jwtSecret)

        const session = await prisma.hssessions.findUnique({
            where: { token }
        });

        if (typeof decodedJwt === "string" || !session) {
            return reply.status(401).send({ message: "Token inválido ou expirado" });
        }

        request.user = decodedJwt as FastifyRequest["user"];
    } catch (err) {
        reply.status(401).send({ message: "Autenticação falhou" })
    }

}

export default async function (app: FastifyInstance) {

    app.register(userAuthRoutes, { prefix: "/auth" });

    app.register(async (protectedRoutes) => {
        protectedRoutes.addHook("preHandler", authenticate);

        protectedRoutes.get("/me", async (req, reply) => {
            return reply.send(req.user);
        });

        protectedRoutes.register(validitiesRoutes, { prefix: "/validities" });
        protectedRoutes.register(validityRequestsRoutes, { prefix: "/validityRequests" });
        protectedRoutes.register(bonusRoutes, { prefix: "/bonus" });
    });
}