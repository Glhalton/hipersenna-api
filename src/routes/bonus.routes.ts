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
        description: "Realiza a consulta de bônus.",
        security: [{ BearerAuth: [] }],
        querystring: getBonusSchema,
        response: {
          200: z.array(bonusResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Bonus"],
        summary: "Rota de consulta de bônus.",
      },
    },
    bonusListController
  );
}
