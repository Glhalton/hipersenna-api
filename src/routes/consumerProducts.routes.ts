import { FastifyInstance } from "fastify";
import {
  createConsumerProductsController,
  deleteConsumerProductsController,
  getConsumerProductsController,
  updateConsumerProductsController,
} from "../controllers/consumerProducts.controllers.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  consumerProductsId,
  consumerProductsResponse,
  createConsumerProductsSchema,
  getConsumerProductsSchema,
  updateConsumerProductsSchema,
} from "../schemas/consumerProducts.schemas.js";
import z from "zod";
import { productResponseSchema } from "../schemas/products.schemas.js";

export default async function consumerProductsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a consulta de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        params: getConsumerProductsSchema,
        response: {
          200: z.array(consumerProductsResponse),
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumer-Products"],
        summary: "Rota de consulta de produtos de consumo.",
      },
    },
    getConsumerProductsController
  );

  app.post(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a criação de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        body: createConsumerProductsSchema,
        response: {
          201: consumerProductsResponse,
        },
        tags: ["Consumer-Products"],
        summary: "Rota de criação de produtos de consumo.",
      },
    },
    createConsumerProductsController
  );

  app.patch(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a atualização de dados de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        body: updateConsumerProductsSchema,
        response: {
          200: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumer-Products"],
        summary: "Rota de atualização de dados de produtos de consumo.",
      },
    },
    updateConsumerProductsController
  );

  app.delete(
    "/:id",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a exclusão de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        params: consumerProductsId,
        response: {
          200: consumerProductsResponse,
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumer-Products"],
        summary: "Rota de exclusão de produtos de consumo",
      },
    },
    deleteConsumerProductsController
  );
}
