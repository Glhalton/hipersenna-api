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
import { authorizePermissions } from "../middlewares/authorizePermissions.js";

export default async function sessionsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authorizePermissions(15),
      schema: {
        description: "Realiza a consulta de sessões.",
        security: [{ BearerAuth: [] }],
        querystring: getSessionSchema,
        response: {
          200: z.array(sessionResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Sessions"],
        summary: "Rota de consulta de sessões.",
      },
    },
    getSessionsController
  );

  app.delete(
    "/:id",
    {
      preHandler: authorizePermissions(16),
      schema: {
        description: "Realiza a exclusão de uma sessão pelo ID.",
        security: [{ BearerAuth: [] }],
        params: sessionIdSchema,
        response: {
          200: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
        },
        tags: ["Sessions"],
        summary: "Rota de exclusão de sessões.",
      },
    },
    deleteSessionsController
  );

  app.delete(
    "/",
    {
      preHandler: authorizePermissions(17),
      schema: {
        description:
          "Realiza a exclusão de todas as sessões, com excessão da sessão do usuário que utilizou a rota.",
        security: [{ BearerAuth: [] }],
        response: {
          200: z.object({ message: z.string() }),
        },
        tags: ["Sessions"],
        summary: "Rota de exclusão de todas as sessões",
      },
    },
    deleteAllSessionsController
  );

  app.delete(
    "/me",
    {
      schema: {
        description:
          "Realiza a exclusão das sessões do usuário que acessou a rota.",
        security: [{ BearerAuth: [] }],
        response: {
          200: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
        },
        tags: ["Sessions"],
        summary: "Rota de exclusão das sessões do usuário que acessou a rota.",
      },
    },
    deleteMySessionController
  );
}
