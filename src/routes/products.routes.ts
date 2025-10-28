import { FastifyInstance } from "fastify";
import { getProductController } from "../controllers/products.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function productsRoutes(app: FastifyInstance) {
  app.get("/", {preHandler: authorizePermissions(23)},getProductController);
}
