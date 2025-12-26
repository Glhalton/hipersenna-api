import { FastifyInstance } from "fastify/types/instance.js";
import {
  createConsumptionNotesController,
  deleteConsumptionNotesController,
  getConsumptionNotesController,
  updateConsumptionNotesController,
} from "../controllers/consumptionNotes.controllers.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  consumptionNotesIdSchema,
  consumptionNotesResponseSchema,
  createConsumptionNotesSchema,
  getConsumptionNotesSchema,
  updateConsumptionNotesSchema,
} from "../schemas/consumptionNotes.schemas.js";
import z from "zod";
import { authorize } from "../middlewares/authorize.middleware.js";

export async function consumptionNotesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(34)],
      schema: {
        summary: "Rota de consulta de notas de consumo.",
        description: "Realiza a consulta de notas de consumo.",
        tags: ["Consumption-Notes"],
        security: [{ BearerAuth: [] }],
        querystring: getConsumptionNotesSchema,
        response: {
          200: z.array(consumptionNotesResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getConsumptionNotesController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(35)],
      schema: {
        summary: "Rota de criação de notas de consumo.",
        description: "Realiza a criação de notas de consumo",
        tags: ["Consumption-Notes"],
        security: [{ BearerAuth: [] }],
        body: createConsumptionNotesSchema,
        response: {
          201: consumptionNotesResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          409: z.object({ message: z.object() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    createConsumptionNotesController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(36)],
      schema: {
        summary: "Rota de atualização de dados de notas de consumo.",
        description: "Realiza a atualização de dados de notas de consumo.",
        tags: ["Consumption-Notes"],
        params: consumptionNotesIdSchema,
        security: [{ BearerAuth: [] }],
        body: updateConsumptionNotesSchema,
        response: {
          200: consumptionNotesResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    updateConsumptionNotesController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(37)],
      schema: {
        summary: "Rota de exclusão de notas de consumo",
        description: "Realiza a exclusão de notas de consumo",
        tags: ["Consumption-Notes"],
        security: [{ BearerAuth: [] }],
        params: consumptionNotesIdSchema,
        response: {
          200: consumptionNotesResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    deleteConsumptionNotesController
  );
}
