import { FastifyInstance } from "fastify";
import { signinController } from '../controllers/signin.controllers.js';

export default async function signinRoutes(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: {
        description: "Rota de autenticação de usuários cadastrados no sistema",
        body: {
          type: "object",
          properties: {
            username: { type: "string" },
            password: { type: "string" },
          },
        },
      },
    },
    signinController
  );
}
