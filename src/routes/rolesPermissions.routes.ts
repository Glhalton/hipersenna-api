import { FastifyInstance } from "fastify";
import {
  createRolePermissionsController,
  deleteRolePermissionController,
  getRolePermissionsController,
} from "../controllers/rolesPermissions.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function rolesPermissionsRoutes(app: FastifyInstance) {
  app.get("/id/:id", getRolePermissionsController);

  app.post(
    "/",
    { preHandler: authorizePermissions(14) },
    createRolePermissionsController
  );

  app.delete(
    "/",
    { preHandler: authorizePermissions(26) },
    deleteRolePermissionController
  );
}
