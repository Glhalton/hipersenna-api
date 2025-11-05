import { FastifyInstance } from "fastify";
import { getProductController } from '../controllers/products.controllers.js';
import { authorizePermissions } from '../middlewares/authorizePermissions.js';

export default async function productsRoutes(app: FastifyInstance) {
  app.get("/", {preHandler: authorizePermissions(23)},getProductController);
}
