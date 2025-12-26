import { FastifyInstance } from "fastify";
import {
  createValidityController,
  getMyValiditiesController,
  getValidityController,
  updateValidityController,
} from "../controllers/validities.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  createValiditySchema,
  getValiditySchema,
  updateValiditySchema,
  validityResponseSchema,
} from "../schemas/validities.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function validitiesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(28)],
      schema: {
        summary: "Rota de consulta de validades.",
        description: "Realiza a consulta de validades.",
        tags: ["Validities"],
        security: [{ BearerAuth: [] }],
        querystring: getValiditySchema,
        response: {
          200: z.array(validityResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getValidityController
  );

  app.get(
    "/me",
    {
      preHandler: [authenticate],
      schema: {
        summary:
          "Rota de consulta de validades vinculadas ao usuário que consultou.",
        description:
          "Realiza a consulta de validades vinculadas ao usuário que consultou.",
        tags: ["Validities"],
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(validityResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getMyValiditiesController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(29)],
      schema: {
        summary: "Rota de criação de validades",
        description: "Realiza a criação de validades.",
        tags: ["Validities"],
        security: [{ BearerAuth: [] }],
        body: createValiditySchema,
        response: {
          201: validityResponseSchema,
          200: z.object({ message: z.string() }),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    createValidityController
  );

  app.patch(
    "/",
    {
      preHandler: [authenticate, authorize(30)],
      schema: {
        summary: "Rota de atualização de dados de validades.",
        description:
          "Realiza a atualização de tratamento de produtos das validades.",
        tags: ["Validities"],
        security: [{ BearerAuth: [] }],
        body: updateValiditySchema,
        response: {
          200: z.object({ message: z.string() }),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    updateValidityController
  );
}
