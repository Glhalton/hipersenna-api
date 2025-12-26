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
  const { id, name, description } = getPermissionSchema.parse(request.query);

  const permission = await getPermissionService({ id, name, description });

  return reply.status(200).send(permission);
}

export async function createPermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name, description } = permissionSchema.parse(request.body);
  const permission = await createPermissionService({ name, description });

  return reply.status(201).send(permission);
}

export async function updatePermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = permissionIdSchema.parse(request.params);
  const { name, description } = updatePermissionSchema.parse(request.body);

  const permissionUpdated = await updatePermissionService(id, {
    name,
    description,
  });

  return reply.status(200).send(permissionUpdated);
}

export async function deletePermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = permissionIdSchema.parse(request.params);

  const permissionDeleted = await deletePermissionService(id);

  return reply.status(200).send(permissionDeleted);
}
