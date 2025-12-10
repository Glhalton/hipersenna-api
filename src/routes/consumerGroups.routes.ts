import { FastifyInstance } from "fastify";
import {
  createConsumerGroupsController,
  deleteConsumerGroupsController,
  getConsumerGroupsController,
  updateConsumerGroupsController,
} from "../controllers/consumerGroups.controllers.js";
import {
  consumerGroupsId,
  consumerGroupsResponseSchema,
  createConsumerGroupsSchema,
  getConsumerGroupsSchema,
  updateConsumerGroupsSchema,
} from "../schemas/consumerGroups.schemas.js";
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
        querystring: getConsumerGroupsSchema,
        response: {
          200: z.array(consumerGroupsResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumer-Groups"],
        summary: "Rota de consulta de grupos de consumo.",
      },
    },
    getConsumerGroupsController
  );

  app.post(
    "/",
    {
      preHandler: authenticate,
      schema: {
        description: "Realiza a criação de grupos de consumo.",
        security: [{BearerAuth: []}],
        body: createConsumerGroupsSchema,
        response: {
          201: consumerGroupsResponseSchema,
        },
        tags: ["Consumer-Groups"],
        summary: "Rota de criação de grupos de consumo.",
      },
    },
    createConsumerGroupsController
  ),
    app.patch(
      "/:id",
      {
        preHandler: authenticate,
        schema: {
          description: "Realiza a atualização de dados de grupos de consumo.",
          security: [{BearerAuth: []}],
          params: consumerGroupsId,
          body: updateConsumerGroupsSchema,
          response: {
            200: consumerGroupsResponseSchema,
            404: z.object({ message: z.string() }),
          },
          tags: ["Consumer-Groups"],
          summary: "Rota de atualização de dados de grupos de consumo.",
        },
      },
      updateConsumerGroupsController
    ),
    app.delete(
      "/:id",
      {
        preHandler: authenticate,
        schema: {
          description: "Realiza a exclusão de grupos de consumo.",
          security: [{BearerAuth: []}],
          params: consumerGroupsId,
          response: {
            200: consumerGroupsResponseSchema,
            404: z.object({ message: z.string() }),
          },
          tags: ["Consumer-Groups"],
          summary: "Rota de exclusão de grupos de consumo.",
        },
      },
      deleteConsumerGroupsController
    );
}
