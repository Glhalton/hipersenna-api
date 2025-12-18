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
        description: "Realiza a consulta de notas de consumo.",
        security: [{ BearerAuth: [] }],
        querystring: getConsumptionNotesSchema,
        response: {
          200: z.array(consumptionNotesResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumption-Notes"],
        summary: "Rota de consulta de notas de consumo.",
      },
    },
    getConsumptionNotesController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(35)],
      schema: {
        description: "Realiza a criação de notas de consumo",
        security: [{ BearerAuth: [] }],
        body: createConsumptionNotesSchema,
        response: {
          201: consumptionNotesResponseSchema,
        },
        tags: ["Consumption-Notes"],
        summary: "Rota de criação de notas de consumo.",
      },
    },
    createConsumptionNotesController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(36)],
      schema: {
        description: "Realiza a atualização de dados de notas de consumo.",
        params: consumptionNotesIdSchema,
        security: [{ BearerAuth: [] }],
        body: updateConsumptionNotesSchema,
        response: {
          200: consumptionNotesResponseSchema,
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumption-Notes"],
        summary: "Rota de atualização de dados de notas de consumo.",
      },
    },
    updateConsumptionNotesController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(37)],
      schema: {
        description: "Realiza a exclusão de notas de consumo",
        security: [{ BearerAuth: [] }],
        params: consumptionNotesIdSchema,
        response: {
          200: consumptionNotesResponseSchema,
          404: z.object({ message: z.string() }),
        },
        tags: ["Consumption-Notes"],
        summary: "Rota de exclusão de notas de consumo",
      },
    },
    deleteConsumptionNotesController
  );
}
