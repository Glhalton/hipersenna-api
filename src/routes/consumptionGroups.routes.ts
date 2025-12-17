import { FastifyInstance } from "fastify";
import {
  createconsumptionGroupsController,
  deleteconsumptionGroupsController,
  getconsumptionGroupsController,
  updateconsumptionGroupsController,
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
        description: "Realiza a consulta de grupos de consumo.",
        security: [{ BearerAuth: [] }],
        querystring: getConsumptionGroupsSchema,
        response: {
          200: z.array(consumptionGroupsResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumption-Groups"],
        summary: "Rota de consulta de grupos de consumo.",
      },
    },
    getconsumptionGroupsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(43)],
      schema: {
        description: "Realiza a criação de grupos de consumo.",
        security: [{ BearerAuth: [] }],
        body: createConsumptionGroupsSchema,
        response: {
          201: consumptionGroupsResponseSchema,
        },
        tags: ["Consumption-Groups"],
        summary: "Rota de criação de grupos de consumo.",
      },
    },
    createconsumptionGroupsController
  ),
    app.patch(
      "/:id",
      {
        preHandler: [authenticate, authorize(44)],
        schema: {
          description: "Realiza a atualização de dados de grupos de consumo.",
          security: [{ BearerAuth: [] }],
          params: consumptionGroupsId,
          body: updateConsumptionGroupsSchema,
          response: {
            200: consumptionGroupsResponseSchema,
            404: z.object({ message: z.string() }),
          },
          tags: ["Consumption-Groups"],
          summary: "Rota de atualização de dados de grupos de consumo.",
        },
      },
      updateconsumptionGroupsController
    ),
    app.delete(
      "/:id",
      {
        preHandler: [authenticate, authorize(45)],
        schema: {
          description: "Realiza a exclusão de grupos de consumo.",
          security: [{ BearerAuth: [] }],
          params: consumptionGroupsId,
          response: {
            200: consumptionGroupsResponseSchema,
            404: z.object({ message: z.string() }),
          },
          tags: ["Consumption-Groups"],
          summary: "Rota de exclusão de grupos de consumo.",
        },
      },
      deleteconsumptionGroupsController
    );
}
