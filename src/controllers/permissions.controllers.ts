import { FastifyRequest, FastifyReply } from "fastify";
import {
  createPermissionService,
  deletePermissionService,
  getPermissionService,
  updatePermissionService,
} from "../services/permissions.services.js";
import {
  getPermissionSchema,
  permissionIdSchema,
  permissionSchema,
  updatePermissionSchema,
} from "../schemas/permissions.schemas.js";

export async function getPermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, name, description } = getPermissionSchema.parse(request.query);

    const permission = await getPermissionService({ id, name, description });

    if (!permission || permission.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nenhuma permissão encontrada!" });
    }

    return reply.status(200).send(permission);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createPermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { name, description } = permissionSchema.parse(request.body);
    const permission = await createPermissionService({ name, description });

    return reply.status(201).send(permission);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updatePermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = permissionIdSchema.parse(request.params);
    const { name, description } = updatePermissionSchema.parse(request.body);

    const permission = await getPermissionService({ id });
    if (!permission || permission.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nenhuma permissão encontrada!" });
    }

    const permissionDeleted = await updatePermissionService(id, { name, description });

    return reply.status(200).send(permissionDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deletePermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = permissionIdSchema.parse(request.params);

    const permission = await getPermissionService({ id });
    if (!permission || permission.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nenhuma permissão encontrada!" });
    }

    const permissionDeleted = await deletePermissionService(id);

    return reply.status(200).send(permissionDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
