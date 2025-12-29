import { FastifyInstance } from "fastify";
import { getConcurrentsController } from "../controllers/concurrents.controllers.js";
import {
  concurrentResponseSchema,
  getConcurrentSchema,
} from "../schemas/concurrents.schemas.js";
import z from "zod";
import { authorize } from "../middlewares/authorize.middleware.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function concurrentsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(2)],
      schema: {
        summary: "Rota de consulta de concorrentes",
        description: "Realiza a consulta de concorrentes.",
        tags: ["Concurrents"],
        security: [{ BearerAuth: [] }],
        querystring: getConcurrentSchema,
        response: {
          200: z.array(concurrentResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getConcurrentsController
  );
}
