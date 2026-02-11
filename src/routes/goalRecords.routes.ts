import { FastifyInstance } from "fastify";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import z from "zod";
import { validationErrorSchema } from "../schemas/errors.schemas.js";
import {
  createGoalRecordsSchema,
  goalRecordIdSchema,
  goalRecordsResponseSchema,
  updateGoalRecordsSchema,
} from "../schemas/goalRecords.schemas.js";
import {
  createGoalRecordsController,
  deleteGoalRecordsController,
  getGoalRecordsController,
  updateGoalRecordsController,
} from "../controllers/goalRecords.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";

export default async function goalRecordsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(54)],
      schema: {
        summary: "Rota de consulta de registros de metas.",
        description: "Realiza a consulta de permissões.",
        tags: ["Goal-Records"],
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(goalRecordsResponseSchema).describe("Ok"),
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
    getGoalRecordsController,
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(55)],
      schema: {
        summary: "Rota de criação de registros de metas.",
        description: "Realiza a criaçao de registros de metas.",
        tags: ["Goal-Records"],
        security: [{ BearerAuth: [] }],
        body: createGoalRecordsSchema,
        response: {
          201: goalRecordsResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ messae: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createGoalRecordsController,
  );

  app.patch(
    "/",
    {
      preHandler: [authenticate, authorize(56)],
      schema: {
        summary: "Rota de atualização de registro de metas.",
        description: "Realiza a atualização de dados de registros de metas.",
        tags: ["Goal-Records"],
        security: [{ BearerAuth: [] }],
        body: updateGoalRecordsSchema,
        params: goalRecordIdSchema,
        response: {
          200: goalRecordsResponseSchema.describe("Ok"),
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
    updateGoalRecordsController,
  );

  app.delete(
    "/",
    {
      preHandler: [authenticate, authorize(57)],
      schema: {
        summary: "Rota de exclusão de registro de metas.",
        description: "Realiza a exclusão de registro de metas.",
        tags: ["Goal-Records"],
        security: [{ BearerAuth: [] }],
        params: goalRecordIdSchema,
        response: {
          200: goalRecordsResponseSchema.describe("Ok"),
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
    deleteGoalRecordsController,
  );
}
