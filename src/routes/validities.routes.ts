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
  getMyValiditiesSchema,
  getValiditySchema,
  updateValiditySchema,
  validityResponseSchema,
} from "../schemas/validities.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

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
          200: z.array(validityResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
        querystring: getMyValiditiesSchema,
        response: {
          200: z.array(validityResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
          201: validityResponseSchema.describe("Created"),
          200: z.object({ message: z.string() }).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
          200: z.object({ message: z.string() }).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    updateValidityController
  );
}
