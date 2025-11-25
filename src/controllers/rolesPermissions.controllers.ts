import { FastifyRequest, FastifyReply } from "fastify";
import {
  roleIdSchema,
  rolePermissionSchema,
} from "../schemas/rolesPermissions.schemas.js";
import {
  createRolePermissionsService,
  deleteRolePermissionsService,
  getRolePermissionsService,
} from "../services/rolesPermissions.services.js";

export async function getRolePermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = roleIdSchema.parse(request.params);
    const roles = await getRolePermissionsService(id);

    if (roles.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nenhuma permissão encontrada para esse cargo" });
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
    const { role_id, permission_id } = rolePermissionSchema.parse(request.body);

    const permissions = await getRolePermissionsService(role_id);

    if (permissions.some((item) => permission_id.includes(item.permission_id))) {
      return reply
        .status(400)
        .send({ message: "O cargo já possui uma das permissões mencionadas." });
    }

    const rolePermission = await createRolePermissionsService({
      role_id,
      permission_id,
    });
    return reply
      .status(201)
      .send({ message: "Permissões liberadas com sucesso!" });
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteRolePermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { role_id, permission_id } = rolePermissionSchema.parse(request.body);

    const permissions = await getRolePermissionsService(role_id);

    if (!permissions.some((item) => permission_id.includes(item.permission_id))) {
      return reply
        .status(400)
        .send({ message: "O cargo não possui alguma das permissões mencionadas." });
    }

    const deletedRolePermission = await deleteRolePermissionsService({
      role_id,
      permission_id,
    });

    return reply
      .status(200)
      .send({ message: "Permissões removidas com sucesso!" });
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
