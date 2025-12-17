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
  createConsumptionProductsSchema,
  getConsumptionProductsSchema,
  updateConsumptionProductsSchema,
} from "../schemas/consumptionProducts.schemas.js";
import z from "zod";
import { authorize } from "../middlewares/authorize.middleware.js";

export default async function consumptionProductsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(38)],
      schema: {
        description: "Realiza a consulta de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        params: getConsumptionProductsSchema,
        response: {
          200: z.array(consumptionProductsResponse),
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumption-Products"],
        summary: "Rota de consulta de produtos de consumo.",
      },
    },
    getconsumptionProductsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(39)],
      schema: {
        description: "Realiza a criação de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        body: createConsumptionProductsSchema,
        response: {
          201: consumptionProductsResponse,
        },
        tags: ["Consumption-Products"],
        summary: "Rota de criação de produtos de consumo.",
      },
    },
    createconsumptionProductsController
  );

  app.patch(
    "/",
    {
      preHandler: [authenticate, authorize(40)],
      schema: {
        description: "Realiza a atualização de dados de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        body: updateConsumptionProductsSchema,
        response: {
          200: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumption-Products"],
        summary: "Rota de atualização de dados de produtos de consumo.",
      },
    },
    updateconsumptionProductsController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(41)],
      schema: {
        description: "Realiza a exclusão de produtos de consumo.",
        security: [{ BearerAuth: [] }],
        params: consumptionProductsId,
        response: {
          200: consumptionProductsResponse,
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumption-Products"],
        summary: "Rota de exclusão de produtos de consumo",
      },
    },
    deleteconsumptionProductsController
  );
}
