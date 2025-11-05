import { FastifyRequest, FastifyReply } from "fastify";
import {
  createPermissionService,
  deletePermissionService,
  getAllPermissionsService,
  getPermissionService,
  updatePermissionService,
} from '../services/permissions.services.js';
import {
  permissionIdSchema,
  permissionSchema,
  updatePermissionSchema,
} from '../schemas/permissions.schemas.js';

export async function getAllPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const permissions = await getAllPermissionsService();
    if (permissions.length === 0) {
      throw new Error("Nenhum cargo encontrado");
    }

    return reply.status(200).send(permissions);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function getPermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = permissionIdSchema.parse(request.params);

    const permission = await getPermissionService(id);

    if (!permission) {
      throw new Error("Permissão não encontrada");
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
    const data = permissionSchema.parse(request.body);
    const permission = await createPermissionService(data);

    return reply.status(201).send(permission);
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

    const permissionExists = await getPermissionService(id);
    if (!permissionExists) {
      throw new Error("Permissão não encontrada");
    }

    const permission = await deletePermissionService(id);

    return reply.status(200).send(permission);
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
    const data = updatePermissionSchema.parse(request.body);

    const permissionExists = await getPermissionService(id);
    if (!permissionExists) {
      throw new Error("Permissão não encontrada");
    }

    const permission = await updatePermissionService(id, data);

    return reply.status(200).send(permission);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
