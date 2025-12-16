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
  getNfcDataSchema,
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
        description:
          "Realiza a consulta de rifas de sorteio e o cliente ao qual pertence.",
        query: getRaffleSchema,
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(raffleResponseWithClientSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Raffles"],
        summary: "Rota de consulta de rifas.",
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
        query: getMyRaffleSchema,
        response: {
          200: z.array(raffleResponseWithNoClientSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Raffles"],
        summary: "Rota de consulta de rifas pelo CPF.",
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
        body: createRaffleSchema,
        response: {
          201: z.array(raffleResponseWithNoClientSchema),
        },
        tags: ["Raffles"],
        summary: "Rota de criação de rifas.",
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
        security: [{ BearerAuth: [] }],
        params: drawRafflesSchema,
        response: {
          200: raffleResponseWithClientSchema,
        },
        tags: ["Raffles"],
        summary: "Rota de sorteio de rifas.",
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
        security: [{ BearerAuth: [] }],
        params: drawRafflesSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
        tags: ["Raffles"],
        summary: "Rota de inativação de rifas.",
      },
    },
    invalidateRafflesController
  );
}
