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
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function consumptionProductsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(38)],
      schema: {
        summary: "Rota de consulta de produtos de consumo.",
        description: "Realiza a consulta de produtos de consumo.",
        tags: ["Consumption-Products"],
        security: [{ BearerAuth: [] }],
        params: getConsumptionProductsSchema,
        response: {
          200: z.array(consumptionProductsResponse).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getconsumptionProductsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(39)],
      schema: {
        summary: "Rota de criação de produtos de consumo.",
        description: "Realiza a criação de produtos de consumo.",
        tags: ["Consumption-Products"],
        security: [{ BearerAuth: [] }],
        body: createConsumptionProductsSchema,
        response: {
          201: consumptionProductsResponse.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createconsumptionProductsController
  );

  app.patch(
    "/",
    {
      preHandler: [authenticate, authorize(40)],
      schema: {
        summary: "Rota de atualização de dados de produtos de consumo.",
        description: "Realiza a atualização de dados de produtos de consumo.",
        tags: ["Consumption-Products"],
        security: [{ BearerAuth: [] }],
        body: updateConsumptionProductsSchema,
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
    updateconsumptionProductsController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(41)],
      schema: {
        summary: "Rota de exclusão de produtos de consumo",
        description: "Realiza a exclusão de produtos de consumo.",
        tags: ["Consumption-Products"],
        security: [{ BearerAuth: [] }],
        params: consumptionProductsId,
        response: {
          200: consumptionProductsResponse.describe("Ok"),
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
    deleteconsumptionProductsController
  );
}
