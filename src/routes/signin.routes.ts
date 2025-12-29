import { FastifyInstance } from "fastify";
import { signinController } from "../controllers/signin.controllers.js";
import {
  signInResponseSchema,
  signInSchema,
} from "../schemas/signin.schemas.js";
import z from "zod";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

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
          201: signInResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    signinController
  );
}
