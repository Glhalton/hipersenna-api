import { FastifyInstance } from "fastify";
import {
  createRafflesController,
  drawRafflesController,
  getMyRafflesController,
  getRafflesController,
  invalidateRafflesController,
} from "../controllers/raffles.controllers.js";
import {
  createRaffleSchema,
  drawRafflesSchema,
  getMyRaffleSchema,
  getRaffleSchema,
  raffleResponseWithClientSchema,
  raffleResponseWithNoClientSchema,
} from "../schemas/raffles.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function rafflesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de rifas.",
        description:
          "Realiza a consulta de rifas de sorteio e o cliente ao qual pertence.",
        tags: ["Raffles"],
        query: getRaffleSchema,
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(raffleResponseWithClientSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getRafflesController
  );

  app.get(
    "/me",
    {
      preHandler: [],
      schema: {
        description: "Realiza a consulta de rifas de sorteio pelo CPF.",
        summary: "Rota de consulta de rifas pelo CPF.",
        tags: ["Raffles"],
        query: getMyRaffleSchema,
        response: {
          200: z.array(raffleResponseWithNoClientSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getMyRafflesController
  );

  app.post(
    "/",
    {
      preHandler: [],
      schema: {
        description: "Realiza a criação de rifas de sorteio.",
        summary: "Rota de criação de rifas.",
        tags: ["Raffles"],
        body: createRaffleSchema,
        response: {
          201: z.array(raffleResponseWithNoClientSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    createRafflesController
  );

  app.patch(
    "/draw/:branch_id",
    {
      preHandler: [authenticate],
      schema: {
        description: "Realiza o sorteio de rifas em uma determinada filial.",
        summary: "Rota de sorteio de rifas.",
        tags: ["Raffles"],
        security: [{ BearerAuth: [] }],
        params: drawRafflesSchema,
        response: {
          200: raffleResponseWithClientSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    drawRafflesController
  );
  app.patch(
    "/invalidate/:branch_id",
    {
      preHandler: [authenticate],
      schema: {
        description: "Realiza a inativação de rifas em uma determinada filial.",
        summary: "Rota de inativação de rifas.",
        tags: ["Raffles"],
        security: [{ BearerAuth: [] }],
        params: drawRafflesSchema,
        response: {
          200: z.object({ message: z.string() }),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    invalidateRafflesController
  );
}
