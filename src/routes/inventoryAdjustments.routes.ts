import { FastifyInstance } from "fastify";
import { getInventoryAdjustmentsService } from "../services/inventoryAdjustments.services.js";
import {
  createInventoryAdjustmentsController,
  getDetailedInventoryAdjustmentsController,
  getInventoryAdjustmentsController,
  updateInventoryAdjustmentController,
} from "../controllers/inventoryAdjustments.controllers.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  createInventoryAdjustmentSchema,
  getDetailedInventoryAdjustmentsResponseSchema,
  getInventoryAdjustmentsResponse,
  getInventoryAdjustmentsSchema,
  inventoryAdjustmentIdSchema,
  inventoryAdjustmentsResponse,
  updateInventoryAdjustmentSchema,
} from "../schemas/inventoryAdjustments.schemas.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";
import z from "zod";
import { authorize } from "../middlewares/authorize.middleware.js";

export default function inventoryAdjustmentsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de solicitações de ajustes de estoque.",
        description: "Realiza a consulta de solicitações de ajustes de estoque",
        tags: ["Inventory-Adjustments"],
        security: [{ BearerAuth: [] }],
        querystring: getInventoryAdjustmentsSchema,
        response: {
          200: getInventoryAdjustmentsResponse.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ messae: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getInventoryAdjustmentsController,
  );
  app.get(
    "/:id",
    {
      preHandler: [authenticate, authorize(64)],
      schema: {
        summary:
          "Rota de consulta detalhada de solicitações de ajustes de estoque.",
        description:
          "Realiza a consulta detalhada de solicitações de ajustes de estoque",
        tags: ["Inventory-Adjustments"],
        security: [{ BearerAuth: [] }],
        params: inventoryAdjustmentIdSchema,
        response: {
          200: getDetailedInventoryAdjustmentsResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ messae: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getDetailedInventoryAdjustmentsController,
  );
  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(63)],
      schema: {
        summary: "Rota de criação de solicitações de ajustes de estoque.",
        description: "Realiza a criação de solicitações de ajustes de estoque.",
        tags: ["Inventory-Adjustments"],
        security: [{ BearerAuth: [] }],
        body: createInventoryAdjustmentSchema,
        response: {
          201: inventoryAdjustmentsResponse.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createInventoryAdjustmentsController,
  );
  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(65)],
      schema: {
        summary:
          "Rota de atualização de dados de solicitações de ajustes de estoque.",
        description:
          "Realiza a atualização de dados de solicitações de ajustes de estoque.",
        tags: ["Inventory-Adjustments"],
        security: [{ BearerAuth: [] }],
        body: updateInventoryAdjustmentSchema,
        params: inventoryAdjustmentIdSchema,
        response: {
          200: inventoryAdjustmentsResponse.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    updateInventoryAdjustmentController,
  );
}
