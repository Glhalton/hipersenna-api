import { FastifyInstance } from "fastify";
import { getProductController } from "../controllers/products.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  getProductSchema,
  productResponseSchema,
} from "../schemas/products.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function productsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(7)],
      schema: {
        summary: "Rota de consulta de produtos.",
        description:
          "Realiza a consulta de dados de um produto cadastrado no winthor.",
        tags: ["Products"],
        security: [{ BearerAuth: [] }],
        querystring: getProductSchema,
        response: {
          200: z.array(productResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getProductController
  );
}
