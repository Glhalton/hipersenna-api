import { FastifyRequest, FastifyReply } from "fastify";
import {
  roleIdSchema,
  rolePermissionSchema,
} from '../schemas/rolesPermissions.schemas.js';
import {
  createRolePermissionsService,
  deleteRolePermissionsService,
  getRolePermissionsService,
} from '../services/rolesPermissions.services.js';

export async function getRolePermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = roleIdSchema.parse(request.params);
    const roles = await getRolePermissionsService(id);

    if (roles.length === 0) {
      throw new Error("Nenhuma permissão encontrada para esse cargo");
    }

    return reply.status(200).send(roles);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function createRolePermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsedData = rolePermissionSchema.parse(request.body);
    const rolePermission = await createRolePermissionsService(parsedData);
    return reply.status(201).send(rolePermission);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteRolePermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsedData = rolePermissionSchema.parse(request.body);
    const deletedRolePermission = await deleteRolePermissionsService(
      parsedData
    );

    return reply.status(200).send(deletedRolePermission);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
