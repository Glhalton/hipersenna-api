import { FastifyInstance } from "fastify";
import { bonusListController } from '../controllers/bonus.controllers.js';
import { authorizePermissions } from '../middlewares/authorizePermissions.js';

export default async function bonusRoutes(app: FastifyInstance) {
  app.get("/",{preHandler: authorizePermissions(24)}, bonusListController);
}
