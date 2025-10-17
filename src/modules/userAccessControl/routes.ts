import { FastifyInstance } from "fastify";
import {
  rolePermissionSchema,
  userAccessControlParamSchema,
  userRoleSchema,
} from "./schema";
import {
  createRolePermissions,
  createUserRoles,
  deleteRolePermissions,
  deleteUserRoles,
  getUserRolesById,
} from "./service";
import { authorizePermissions } from "../../middlewares/authorizePermissions";

export default async function userAccessControlRoutes(app: FastifyInstance) {
  app.get("/user-roles/id/:id", async (request, reply) => {
    try {
      const { id } = userAccessControlParamSchema.parse(request.params);
      const userRoles = await getUserRolesById(id);

      return reply.status(200).send(userRoles);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.post(
    "/user-roles",
    { preHandler: authorizePermissions(13) },
    async (request, reply) => {
      try {
        const parsedData = userRoleSchema.parse(request.body);
        const userRole = await createUserRoles(parsedData);
        return reply.status(201).send(userRole);
      } catch (error: any) {
        return reply.status(400).send({ message: error.message });
      }
    }
  );

  app.delete("/user-roles", {preHandler: authorizePermissions(25)}, async (request, reply) => {
    try {
      const parsedData = userRoleSchema.parse(request.body);

      const deletedUserRole = await deleteUserRoles(parsedData);

      return reply.status(200).send(deletedUserRole);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.post("/role-permissions",{preHandler: authorizePermissions(14)}, async (request, reply) => {
    try {
      const parsedData = rolePermissionSchema.parse(request.body);
      const rolePermission = await createRolePermissions(parsedData);
      return reply.status(201).send(rolePermission);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.delete("/role-permissions",{preHandler: authorizePermissions(26)}, async (request, reply) => {
    try {
      const parsedData = rolePermissionSchema.parse(request.body);
      const deletedRolePermission = await deleteRolePermissions(parsedData);

      return reply.status(200).send(deletedRolePermission);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });
}
