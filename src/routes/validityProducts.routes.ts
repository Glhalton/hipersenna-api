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
import { getValidityProductsController } from "../controllers/validityProducts.controllers.js";
import { getValidityProductsSchema } from "../schemas/validityProducts.schemas.js";

export default async function validityProductsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de produtos que estão vencendo.",
        description: "Realiza a consulta de produtos que estão vencendo.",
        tags: ["Validity-Products"],
        security: [{ BearerAuth: [] }],
        querystring: getValidityProductsSchema,
        response: {
          // 200: z.array(validityResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getValidityProductsController,
  );
}
