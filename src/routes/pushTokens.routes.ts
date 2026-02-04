import { FastifyInstance } from "fastify";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  createPushTokensController,
  getPushTokensController,
} from "../controllers/pushTokens.controllers.js";

export default async function pushTokensRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de Push Tokens",
        description: "Realiza a consulta de dados de Push Tokens",
        tags: ["PushTokens"],
        security: [{ BearerAuth: [] }],
      },
    },
    getPushTokensController,
  );

  app.post(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de criação de Push Tokens.",
        description: "Realiza a criação de Push Tokens.",
        tags: ["PushTokens"],
        security: [{ BearerAuth: [] }],
      },
    },
    createPushTokensController,
  );
}
