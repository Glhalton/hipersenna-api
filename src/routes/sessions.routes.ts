import { FastifyInstance } from "fastify";
import { deleteAllSessionsController, deleteSessionsController, getSessionsController } from "../controllers/sessions.controllers.js";

export default async function sessionsRoutes (app: FastifyInstance){
    app.get("/", getSessionsController);

    app.delete("/id/:id", deleteSessionsController);

    app.delete("/", deleteAllSessionsController);
}