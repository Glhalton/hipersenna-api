import {FastifyInstance} from "fastify";
import { createPermissionController, deletePermissionController, getAllPermissionsController, getPermissionController, updatePermissionController } from "../controllers/permissions.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function permissionsRoutes(app: FastifyInstance){

    app.get("/",{preHandler: authorizePermissions(9)}, getAllPermissionsController);

    app.get("/id/:id",{preHandler: authorizePermissions(9)}, getPermissionController);

    app.post("/",{preHandler: authorizePermissions(6)}, createPermissionController);

    app.delete("/id/:id",{preHandler: authorizePermissions(7)}, deletePermissionController);

    app.patch("/id/:id",{preHandler: authorizePermissions(8)}, updatePermissionController);
}