import { FastifyInstance } from "fastify";
import { bonusListController } from "../controllers/bonus.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function bonusRoutes(app: FastifyInstance) {
  app.get("/",{preHandler: authorizePermissions(24)}, bonusListController);
}
