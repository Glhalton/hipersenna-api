import { FastifyInstance } from "fastify";
import { getConsumerGroupsController } from "../controllers/consumerGroups.controllers.js";

export default async function(app: FastifyInstance){
    app.get("/", getConsumerGroupsController);
}