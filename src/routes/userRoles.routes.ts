import { FastifyInstance} from "fastify";
import { createUserRolesController, deleteUserRolesController, getUserRolesController } from "../controllers/userRoles.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function userRolesRoutes(app: FastifyInstance){
    app.get("/id/:id",  getUserRolesController);

    app.post("/", {preHandler: authorizePermissions(13)},createUserRolesController);

    app.delete("/", {preHandler: authorizePermissions(25)}, deleteUserRolesController);
}