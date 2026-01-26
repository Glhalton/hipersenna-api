import { FastifyInstance } from "fastify/types/instance.js";
import {
  createConsumptionNotesController,
  deleteConsumptionNotesController,
  getConsumptionNotesController,
  getConsumptionNotesDetailedController,
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
import { validationErrorSchema } from "../schemas/errors.schemas.js";

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
          200: z.array(consumptionNotesResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z
            .object({ message: z.string() })
            .describe("Forbidden")
            .describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getConsumptionNotesController,
  );

  app.get(
    "/:id",
    {
      preHandler: [authenticate, authorize(34)],
      schema: {
        summary: "Rota de consulta detalhada de notas de consumo.",
        description: "Realiza a consulta detalhada de notas de consumo.",
        tags: ["Consumption-Notes"],
        security: [{ BearerAuth: [] }],
        params: consumptionNotesIdSchema,
        response: {
          200: consumptionNotesResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z
            .object({ message: z.string() })
            .describe("Forbidden")
            .describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getConsumptionNotesDetailedController,
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
          201: consumptionNotesResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          409: z.object({ message: z.object() }).describe("Conflict"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createConsumptionNotesController,
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
          200: consumptionNotesResponseSchema.describe("Ok"),
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
    updateConsumptionNotesController,
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
          200: consumptionNotesResponseSchema.describe("Ok"),
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
    deleteConsumptionNotesController,
  );
}
