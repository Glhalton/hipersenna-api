import { FastifyInstance } from "fastify";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import z from "zod";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

import {
  damageReportResponseSchema,
  getDamageReportSchema,
  getSalesReportSchema,
  salesReportResponseSchema,
} from "../schemas/reports.schemas.js";
import {
  getDamageReportController,
  getSalesReportController,
} from "../controllers/reports.controllers.js";

export default async function reportsRoutes(app: FastifyInstance) {
  app.get(
    "/damage",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de relatório de avarias",
        description: "Rota de consulta de relatório de avarias",
        tags: ["Reports"],
        security: [{ BearerAuth: [] }],
        querystring: getDamageReportSchema,
        response: {
          200: z.array(damageReportResponseSchema).describe("Ok"),
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
    getDamageReportController,
  );

  app.get(
    "/sales",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de relatório de vendas",
        description: "Rota de consulta de relatório de vendas",
        tags: ["Reports"],
        security: [{ BearerAuth: [] }],
        querystring: getSalesReportSchema,
        response: {
          200: z.array(salesReportResponseSchema).describe("Ok"),
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
    getSalesReportController,
  );
}
