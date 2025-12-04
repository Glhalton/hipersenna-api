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
        description: "Realiza a consulta de validades.",
        security: [{ BearerAuth: [] }],
        querystring: getValiditySchema,
        response: {
          200: z.array(validityResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Validities"],
        summary: "Rota de consulta de validades.",
      },
    },
    getValidityController
  );

  app.get(
    "/me",
    {
      preHandler: [authenticate],
      schema: {
        description:
          "Realiza a consulta de validades vinculadas ao usuário que consultou.",
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(validityResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Validities"],
        summary:
          "Rota de consulta de validades vinculadas ao usuário que consultou.",
      },
    },
    getMyValiditiesController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(29)],
      schema: {
        description: "Realiza a criação de validades.",
        security: [{ BearerAuth: [] }],
        body: createValiditySchema,
        response: {
          201: validityResponseSchema,
        },
        tags: ["Validities"],
        summary: "Rota de criação de validades",
      },
    },
    createValidityController
  );

  app.patch(
    "/",
    {
      preHandler: [authenticate, authorize(30)],
      schema: {
        description:
          "Realiza a atualização de tratamento de produtos das validades.",
        security: [{ BearerAuth: [] }],
        body: updateValiditySchema,
        response: {
          200: z.object({ message: z.string() }),
        },
        tags: ["Validities"],
        summary: "Rota de atualização de dados de validades.",
      },
    },
    updateValidityController
  );
}
