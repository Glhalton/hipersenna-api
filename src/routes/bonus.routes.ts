import { FastifyInstance } from "fastify";
import { bonusListController } from '../controllers/bonus.controllers.js';
import { authorizePermissions } from '../middlewares/authorizePermissions.js';
import { bonusResponseSchema, getBonusSchema } from "../schemas/bonus.schemas.js";
import z from "zod";

export default async function bonusRoutes(app: FastifyInstance) {
  app.get("/",{preHandler: authorizePermissions(24), schema:{
    description: "Realiza a consulta de bônus.",
    security: [{BearerAuth: []}],
    querystring: getBonusSchema,
    response:{
      200: z.array(bonusResponseSchema),
      404: z.object({message: z.string()})
    },
    tags:["Bonus"],
    summary: "Rota de consulta de bônus."
  }}, bonusListController);
}
