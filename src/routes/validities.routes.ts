import { FastifyInstance } from "fastify";
import {
  createValidityController,
  getMyValiditiesController,
  getValidityController,
  updateValidityController,
} from "../controllers/validities.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import {
  createValiditySchema,
  getValiditySchema,
  updateValiditySchema,
  validityResponseSchema,
} from "../schemas/validities.schemas.js";
import z from "zod";

export default async function validitiesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authorizePermissions(28),
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
      preHandler: authorizePermissions(29),
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
      preHandler: authorizePermissions(30),
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
