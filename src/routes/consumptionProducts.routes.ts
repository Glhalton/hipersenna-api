import { FastifyInstance } from "fastify";
import {
  createconsumptionProductsController,
  deleteconsumptionProductsController,
  getconsumptionProductsController,
  updateconsumptionProductsController,
} from "../controllers/consumptionProducts.controllers.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  consumptionProductsId,
  consumptionProductsResponse,
  createconsumptionProductsSchema,
  getconsumptionProductsSchema,
  updateconsumptionProductsSchema,
} from "../schemas/consumptionProducts.schemas.js";
import z from "zod";
import { productResponseSchema } from "../schemas/products.schemas.js";

export default async function consumptionProductsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a consulta de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        params: getconsumptionProductsSchema,
        response: {
          200: z.array(consumptionProductsResponse),
          404: z.object({ message: z.string() }),
        },
        tags: ["consumption-Products"],
        summary: "Rota de consulta de produtos de consumo.",
      },
    },
    getconsumptionProductsController
  );

  app.post(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a criação de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        body: createconsumptionProductsSchema,
        response: {
          201: consumptionProductsResponse,
        },
        tags: ["consumption-Products"],
        summary: "Rota de criação de produtos de consumo.",
      },
    },
    createconsumptionProductsController
  );

  app.patch(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a atualização de dados de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        body: updateconsumptionProductsSchema,
        response: {
          200: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
        },
        tags: ["consumption-Products"],
        summary: "Rota de atualização de dados de produtos de consumo.",
      },
    },
    updateconsumptionProductsController
  );

  app.delete(
    "/:id",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a exclusão de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        params: consumptionProductsId,
        response: {
          200: consumptionProductsResponse,
          404: z.object({ message: z.string() }),
        },
        tags: ["consumption-Products"],
        summary: "Rota de exclusão de produtos de consumo",
      },
    },
    deleteconsumptionProductsController
  );
}
