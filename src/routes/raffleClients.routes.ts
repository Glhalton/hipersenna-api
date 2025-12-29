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
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function raffleClientsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de clientes das rifas.",
        description: "Realiza a consulta de clientes das rifas.",
        tags: ["Raffle-Clients"],
        security: [{ BearerAuth: [] }],
        querystring: getRaffleClientSchema,
        response: {
          200: z.array(raffleClientResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getRaffleClientsController
  );

  app.post(
    "/",
    {
      preHandler: [],
      schema: {
        summary: "Rota de criação de clientes de rifas.",
        description: "Realiza a criação de clientes das rifas.",
        tags: ["Raffle-Clients"],
        body: createRaffleClientSchema,
        response: {
          200: raffleClientResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createRaffleClientsController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de atualização de dados de clientes das rifas.",
        description: "Realiza a atualização de dados de clientes das rifas.",
        tags: ["Raffle-Clients"],
        security: [{ BearerAuth: [] }],
        body: updateRaffleClientSchema,
        params: raffleClientIdSchema,
        response: {
          200: raffleClientResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    updateRaffleClientsController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de exclusão de clientes das rifas.",
        description: "Realiza a exclusão de clientes das rifas.",
        tags: ["Raffle-Clients"],
        security: [{ BearerAuth: [] }],
        params: raffleClientIdSchema,
        response: {
          200: raffleClientResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    deleteRaffleClientsController
  );
}
