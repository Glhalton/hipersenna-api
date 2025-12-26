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
          200: z.array(consumptionGroupsResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
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
          201: consumptionGroupsResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
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
            200: consumptionGroupsResponseSchema,
            400: z.object({ message: z.string() }),
            403: z.object({ message: z.string() }),
            404: z.object({ message: z.string() }),
            500: z.object({ message: z.string() }),
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
            200: consumptionGroupsResponseSchema,
            400: z.object({ message: z.string() }),
            403: z.object({ message: z.string() }),
            404: z.object({ message: z.string() }),
            500: z.object({ message: z.string() }),
          },
        },
      },
      deleteConsumptionGroupsController
    );
}
