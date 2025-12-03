import { FastifyInstance } from "fastify";
import {
  createRafflesController,
  drawRafflesController,
  getRafflesController,
  invalidateRafflesController,
} from "../controllers/raffles.controllers.js";
import {
  createRaffleSchema,
  drawRafflesSchema,
  getRaffleSchema,
  raffleResponseSchema,
} from "../schemas/raffles.schemas.js";
import z from "zod";

export default async function rafflesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      schema: {
        description: "Realiza a consulta de rifas de sorteio.",
        query: getRaffleSchema,
        response: {
          200: z.array(raffleResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Raffles"],
        summary: "Rota de consulta de rifas.",
      },
    },
    getRafflesController
  );
  app.post(
    "/",
    {
      schema: {
        description: "Realiza a criação de rifas de sorteio.",
        body: createRaffleSchema,
        response: {
          201: z.array(raffleResponseSchema),
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
      schema: {
        description: "Realiza o sorteio de rifas em uma determinada filial.",
        params: drawRafflesSchema,
        response: {
          200: z.array(raffleResponseSchema),
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
      schema: {
        description: "Realiza a inativação de rifas em uma determinada filial.",
        params: drawRafflesSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
        tags: ["Raffles"],
        summary: "Rota de inativação de rifas"
      },
    },
    invalidateRafflesController
  );
}
