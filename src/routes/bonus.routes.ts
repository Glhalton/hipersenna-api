import { FastifyInstance } from "fastify";
import { bonusListController } from "../controllers/bonus.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  bonusResponseSchema,
  getBonusSchema,
} from "../schemas/bonus.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function bonusRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(1)],
      schema: {
        summary: "Rota de consulta de bônus.",
        description: "Realiza a consulta de bônus.",
        tags: ["Bonus"],
        security: [{ BearerAuth: [] }],
        querystring: getBonusSchema,
        response: {
          200: z.array(bonusResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    bonusListController
  );
}
