import { FastifyInstance } from "fastify";
import { createUserPermissionsController, deleteUserPermissionsController, getUserPermissionsController } from "../controllers/userPermissions.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function userPermissionsRoutes(app: FastifyInstance){
    app.get("/id/:id", getUserPermissionsController);

    app.post("/", { preHandler: authorizePermissions(15) }, createUserPermissionsController);

    app.delete("/", deleteUserPermissionsController);
}