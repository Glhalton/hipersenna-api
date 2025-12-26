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
  const { id } = roleIdSchema.parse(request.params);
  const roles = await getRolePermissionsService(id);

  return reply.status(200).send(roles);
}

export async function createRolePermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { role_id, permission_id } = rolePermissionSchema.parse(request.body);

  const rolePermission = await createRolePermissionsService({
    role_id,
    permission_id,
  });

  return reply
    .status(201)
    .send({ message: "Permissões liberadas com sucesso!" });
}

export async function deleteRolePermissionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { role_id, permission_id } = rolePermissionSchema.parse(request.body);

  const deletedRolePermission = await deleteRolePermissionsService({
    role_id,
    permission_id,
  });

  return reply.status(200).send({
    message: `${deletedRolePermission.count} ${
      deletedRolePermission.count > 1
        ? "Permissões removidas"
        : "Permissão removida"
    } com sucesso!`,
  });
}
