import { FastifyInstance } from "fastify";
import { signinController } from "../controllers/signin.controllers.js";
import {
  signInResponseSchema,
  signInSchema,
} from "../schemas/signin.schemas.js";
import z from "zod";
import { userResponseSchema } from "../schemas/users.schemas.js";

export default async function signinRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: {
        description: "Realiza a autenticação de um usuário",
        body: signInSchema,
        response: {
          201: signInResponseSchema,
        },
        tags: ["Authentication"],
        summary: "Rota de autenticação de usuários.",
      },
    },
    signinController
  );
}
