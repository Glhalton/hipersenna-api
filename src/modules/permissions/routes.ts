import { FastifyInstance } from "fastify";
import {
  permissionParamSchema,
  permissionSchema,
  permissionUpdateSchema,
} from "./schema";
import {
  createPermission,
  deletePermission,
  getPermissionById,
  getPermissions,
  updatePermission,
} from "./service";

export default async function permissionsRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    try {
      const permissions = await getPermissions();
""
      if (permissions.length === 0) {
        throw new Error("Nenhum cargo encontrado");
      }

      return reply.status(200).send(permissions);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.get("/id/:id", async (request, reply) => {
    try {
      const { id } = permissionParamSchema.parse(request.params);

      const permission = await getPermissionById(id);

      if (!permission) {
        throw new Error("Permissão não encontrada");
      }

      return reply.status(200).send(permission);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.post("/", async (request, reply) => {
    try {
      const data = permissionSchema.parse(request.body);
      const permission = await createPermission(data);

      return reply.status(201).send(permission);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.delete("/id/:id", async (request, reply) => {
    try {
      const { id } = permissionParamSchema.parse(request.params);

      const permissionExists = await getPermissionById(id);
      if (!permissionExists) {
        throw new Error("Permissão não encontrada");
      }

      const permission = await deletePermission(id);

      return reply.status(200).send(permission);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.patch("/id/:id", async (request, reply) => {
    try {
      const { id } = permissionParamSchema.parse(request.params);
      const data = permissionUpdateSchema.parse(request.body);

      const permissionExists = await getPermissionById(id);
      if (!permissionExists) {
        throw new Error("Permissão não encontrada");
      }

      const permission = await updatePermission(id, data);

      return reply.status(200).send(permission);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });
}
