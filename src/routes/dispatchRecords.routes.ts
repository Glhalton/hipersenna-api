import { FastifyInstance } from "fastify";
import { getDispatchRecordService } from "../services/dispatchRecords.services.js";
import {
  createDispatchRecordController,
  deleteDispatchRecordController,
  getDispatchRecordController,
  updateDispatchRecordController,
} from "../controllers/dispatchRecords.controllers.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  createDispatchRecordSchema,
  dispatchRecordIdSchema,
  dispatchRecordResponseSchema,
  getDispatchRecordSchema,
  updateDispatchRecordSchema,
} from "../schemas/dispatchRecords.schemas.js";
import z from "zod";
import { validationErrorSchema } from "../schemas/errors.schemas.js";
import { authorize } from "../middlewares/authorize.middleware.js";

export default async function dispatchRecordsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(46)],
      schema: {
        summary: "Rota de consulta de registros de despacho de mercadorias",
        description:
          "Realiza a consulta de registros de despacho de mercadorias",
        security: [{ BearerAuth: [] }],
        tags: ["Dispatch-Records"],
        querystring: getDispatchRecordSchema,
        response: {
          200: z.array(dispatchRecordResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getDispatchRecordController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(47)],
      schema: {
        summary: "Rota de criação de registros de despacho de mercadorias",
        description:
          "Realiza a criação de registros de despacho de mercadorias",
        security: [{ BearerAuth: [] }],
        tags: ["Dispatch-Records"],
        body: createDispatchRecordSchema,
        response: {
          201: dispatchRecordResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createDispatchRecordController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(49)],
      schema: {
        summary: "Rota de atualização de registros de despacho de mercadorias",
        description:
          "Realiza a atualização de registros de despacho de mercadorias",
        security: [{ BearerAuth: [] }],
        tags: ["Dispatch-Records"],
        params: dispatchRecordIdSchema,
        body: updateDispatchRecordSchema,
        response: {
          200: dispatchRecordResponseSchema.describe("Ok"),
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
    updateDispatchRecordController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(48)],
      schema: {
        summary: "Rota de exclusão de registros de despacho de mercadorias",
        description:
          "Realiza a exclusão de registros de despacho de mercadorias",
        security: [{ BearerAuth: [] }],
        tags: ["Dispatch-Records"],
        params: dispatchRecordIdSchema,
        response: {
          200: dispatchRecordResponseSchema.describe("Ok"),
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
    deleteDispatchRecordController
  );
}
