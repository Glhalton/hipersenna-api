import { FastifyInstance } from "fastify";
import { bonusListController } from "../controllers/bonus.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  bonusResponseSchema,
  getBonusSchema,
} from "../schemas/bonus.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

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
          200: z.array(bonusResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    bonusListController
  );
}
