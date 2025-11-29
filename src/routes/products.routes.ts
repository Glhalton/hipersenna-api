import { FastifyInstance } from "fastify";
import { getProductController } from "../controllers/products.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import {
  getProductSchema,
  productResponseSchema,
} from "../schemas/products.schemas.js";
import z from "zod";

export default async function productsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authorizePermissions(7),
      schema: {
        description:
          "Realiza a consulta de dados de um produto cadastrado no winthor.",
        security: [{ BearerAuth: [] }],
        querystring: getProductSchema,
        response: {
          200: z.array(productResponseSchema),
        },
        tags: ["Products"],
        summary: "Rota de consulta de produtos.",
      },
    },
    getProductController
  );
}
