import { FastifyInstance } from "fastify";
import { createConsumerProductsController } from "../controllers/consumerProducts.controllers.js";

export default async function consumerProductsRoutes(app: FastifyInstance){
    app.post("/", createConsumerProductsController);

}