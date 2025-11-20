import { FastifyInstance } from "fastify";
import { signinController } from "../controllers/signin.controllers.js";
import { signInSchema } from "../schemas/signin.schemas.js";

export default async function signinRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: {
        description: "Realiza a autenticação de um usuário",
        body: signInSchema,
        tags: ["Authentication"],
        summary: "Rota de autenticação de usuários.",
      },
    },
    signinController
  );
}
