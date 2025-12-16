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
  createconsumptionGroupsSchema,
  getconsumptionGroupsSchema,
  updateconsumptionGroupsSchema,
} from "../schemas/consumptionGroups.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function (app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a consulta de grupos de consumo.",
        security: [{BearerAuth: []}],
        querystring: getconsumptionGroupsSchema,
        response: {
          200: z.array(consumptionGroupsResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["consumption-Groups"],
        summary: "Rota de consulta de grupos de consumo.",
      },
    },
    getconsumptionGroupsController
  );

  app.post(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a criação de grupos de consumo.",
        security: [{BearerAuth: []}],
        body: createconsumptionGroupsSchema,
        response: {
          201: consumptionGroupsResponseSchema,
        },
        tags: ["consumption-Groups"],
        summary: "Rota de criação de grupos de consumo.",
      },
    },
    createconsumptionGroupsController
  ),
    app.patch(
      "/:id",
      {
        preHandler: authenticate,
        schema: {
          description: "Realiza a atualização de dados de grupos de consumo.",
          security: [{BearerAuth: []}],
          params: consumptionGroupsId,
          body: updateconsumptionGroupsSchema,
          response: {
            200: consumptionGroupsResponseSchema,
            404: z.object({ message: z.string() }),
          },
          tags: ["consumption-Groups"],
          summary: "Rota de atualização de dados de grupos de consumo.",
        },
      },
      updateconsumptionGroupsController
    ),
    app.delete(
      "/:id",
      {
        preHandler: authenticate,
        schema: {
          description: "Realiza a exclusão de grupos de consumo.",
          security: [{BearerAuth: []}],
          params: consumptionGroupsId,
          response: {
            200: consumptionGroupsResponseSchema,
            404: z.object({ message: z.string() }),
          },
          tags: ["consumption-Groups"],
          summary: "Rota de exclusão de grupos de consumo.",
        },
      },
      deleteconsumptionGroupsController
    );
}
