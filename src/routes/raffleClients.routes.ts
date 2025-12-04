import { FastifyInstance } from "fastify";
import {
  createRaffleClientsController,
  deleteRaffleClientsController,
  getRaffleClientsController,
  updateRaffleClientsController,
} from "../controllers/raffleClients.controllers.js";
import {
  createRaffleClientSchema,
  getRaffleClientSchema,
  raffleClientIdSchema,
  raffleClientResponseSchema,
  updateRaffleClientSchema,
} from "../schemas/raffleClients.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function raffleClientsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        description: "Realiza a consulta de clientes das rifas.",
        security: [{BearerAuth: []}],
        querystring: getRaffleClientSchema,
        response: {
          200: z.array(raffleClientResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Raffle-Clients"],
        summary: "Rota de consulta de clientes das rifas.",
      },
    },
    getRaffleClientsController
  );

  app.post(
    "/",
    {
      preHandler: [],
      schema: {
        description: "Realiza a criação de clientes das rifas.",
        body: createRaffleClientSchema,
        response: {
          200: raffleClientResponseSchema,
        },
        tags: ["Raffle-Clients"],
        summary: "Rota de criação de clientes de rifas.",
      },
    },
    createRaffleClientsController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        description: "Realiza a atualização de dados de clientes das rifas.",
        security: [{BearerAuth: []}],
        body: updateRaffleClientSchema,
        params: raffleClientIdSchema,
        response: {
          200: raffleClientResponseSchema,
          404: z.object({ message: z.string() }),
        },
        tags: ["Raffle-Clients"],
        summary: "Rota de atualização de dados de clientes das rifas.",
      },
    },
    updateRaffleClientsController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        description: "Realiza a exclusão de clientes das rifas.",
        security: [{BearerAuth: [] }],
        params: raffleClientIdSchema,
        response: {
          200: raffleClientResponseSchema,
          404: z.object({ message: z.string() }),
        },
        tags: ["Raffle-Clients"],
        summary: "Rota de exclusão de clientes das rifas.",
      },
    },
    deleteRaffleClientsController
  );
}
