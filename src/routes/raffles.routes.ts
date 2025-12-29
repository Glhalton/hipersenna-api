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
import { validationErrorSchema } from "../schemas/errors.schemas.js";

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
          200: z.array(raffleResponseWithClientSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
          200: z.array(raffleResponseWithNoClientSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
          201: z.array(raffleResponseWithNoClientSchema).describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
          200: raffleResponseWithClientSchema.describe("Ok"),
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
          200: z.object({ message: z.string() }).describe("Ok"),
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
    invalidateRafflesController
  );
}
