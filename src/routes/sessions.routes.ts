import { FastifyInstance } from "fastify";
import {
  deleteAllSessionsController,
  deleteMySessionController,
  deleteSessionsController,
  getSessionsController,
} from "../controllers/sessions.controllers.js";
import {
  getSessionSchema,
  sessionIdSchema,
  sessionResponseSchema,
} from "../schemas/sessions.schemas.js";
import z from "zod";
import { authorize } from "../middlewares/authorize.middleware.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function sessionsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(15)],
      schema: {
        summary: "Rota de consulta de sessões.",
        description: "Realiza a consulta de sessões.",
        tags: ["Sessions"],
        security: [{ BearerAuth: [] }],
        querystring: getSessionSchema,
        response: {
          200: z.array(sessionResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getSessionsController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(16)],
      schema: {
        summary: "Rota de exclusão de sessões.",
        description: "Realiza a exclusão de uma sessão pelo ID.",
        tags: ["Sessions"],
        security: [{ BearerAuth: [] }],
        params: sessionIdSchema,
        response: {
          200: z.object({ message: z.string() }),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    deleteSessionsController
  );

  app.delete(
    "/",
    {
      preHandler: [authenticate, authorize(17)],
      schema: {
        summary: "Rota de exclusão de todas as sessões",
        description:
          "Realiza a exclusão de todas as sessões, com excessão da sessão do usuário que utilizou a rota.",
        tags: ["Sessions"],
        security: [{ BearerAuth: [] }],
        response: {
          200: z.object({ message: z.string() }),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    deleteAllSessionsController
  );

  app.delete(
    "/me",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de exclusão das sessões do usuário que acessou a rota.",
        description:
          "Realiza a exclusão das sessões do usuário que acessou a rota.",
        tags: ["Sessions"],
        security: [{ BearerAuth: [] }],
        response: {
          200: z.object({ message: z.string() }),
          400: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    deleteMySessionController
  );
}
