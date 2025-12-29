import { FastifyInstance } from "fastify";
import {
  createConsumptionGroupsController,
  deleteConsumptionGroupsController,
  getConsumptionGroupsController,
  updateConsumptionGroupsController,
} from "../controllers/consumptionGroups.controllers.js";
import {
  consumptionGroupsId,
  consumptionGroupsResponseSchema,
  createConsumptionGroupsSchema,
  getConsumptionGroupsSchema,
  updateConsumptionGroupsSchema,
} from "../schemas/consumptionGroups.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function (app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(42)],
      schema: {
        summary: "Rota de consulta de grupos de consumo.",
        description: "Realiza a consulta de grupos de consumo.",
        tags: ["Consumption-Groups"],
        security: [{ BearerAuth: [] }],
        querystring: getConsumptionGroupsSchema,
        response: {
          200: z.array(consumptionGroupsResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getConsumptionGroupsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(43)],
      schema: {
        summary: "Rota de criação de grupos de consumo.",
        description: "Realiza a criação de grupos de consumo.",
        tags: ["Consumption-Groups"],
        security: [{ BearerAuth: [] }],
        body: createConsumptionGroupsSchema,
        response: {
          201: consumptionGroupsResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createConsumptionGroupsController
  ),
    app.patch(
      "/:id",
      {
        preHandler: [authenticate, authorize(44)],
        schema: {
          summary: "Rota de atualização de dados de grupos de consumo.",
          description: "Realiza a atualização de dados de grupos de consumo.",
          tags: ["Consumption-Groups"],
          security: [{ BearerAuth: [] }],
          params: consumptionGroupsId,
          body: updateConsumptionGroupsSchema,
          response: {
            200: consumptionGroupsResponseSchema.describe("Ok"),
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
      updateConsumptionGroupsController
    ),
    app.delete(
      "/:id",
      {
        preHandler: [authenticate, authorize(45)],
        schema: {
          summary: "Rota de exclusão de grupos de consumo.",
          description: "Realiza a exclusão de grupos de consumo.",
          tags: ["Consumption-Groups"],
          security: [{ BearerAuth: [] }],
          params: consumptionGroupsId,
          response: {
            200: consumptionGroupsResponseSchema.describe("Ok"),
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
      deleteConsumptionGroupsController
    );
}
