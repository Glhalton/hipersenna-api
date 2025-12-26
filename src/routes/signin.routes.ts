import { FastifyInstance } from "fastify";
import { signinController } from "../controllers/signin.controllers.js";
import {
  signInResponseSchema,
  signInSchema,
} from "../schemas/signin.schemas.js";
import z from "zod";

export default async function signinRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: {
        summary: "Rota de autenticação de usuários.",
        description: "Realiza a autenticação de um usuário",
        tags: ["Authentication"],
        body: signInSchema,
        response: {
          201: signInResponseSchema,
          400: z.object({ message: z.string() }),
          401: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    signinController
  );
}
