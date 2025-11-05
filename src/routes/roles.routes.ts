import {FastifyInstance} from "fastify";
import { createRoleController, deleteRoleController, getAllRolesController, getRoleController, updateRoleController } from '../controllers/roles.controllers.js';
import { authorizePermissions } from '../middlewares/authorizePermissions.js';

export default async function rolesRoutes(app: FastifyInstance){
    app.get("/",{preHandler: authorizePermissions(9)}, getAllRolesController);

    app.get("/id/:id", {preHandler: authorizePermissions(9)},getRoleController);

    app.post("/", {preHandler: authorizePermissions(10)},createRoleController);

    app.delete("/id/:id", {preHandler: authorizePermissions(11)},deleteRoleController);

    app.patch("/id/:id", {preHandler: authorizePermissions(12)}, updateRoleController);
}