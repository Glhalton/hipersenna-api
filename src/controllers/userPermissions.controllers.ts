import { FastifyRequest, FastifyReply } from "fastify";
import {
  userIdSchema,
  userPermissionSchema,
} from "../schemas/userPermissions.schemas.js";
import {
  createUserPermissionsService,
  deleteUserPermissionsService,
  getUserPermissionsService,
} from "../services/userPermissions.services.js";

export async function getUserPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = userIdSchema.parse(request.params);
  const permissions = await getUserPermissionsService(id);

  return reply.status(200).send(permissions);
}

export async function createUserPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { user_id, permission_id } = userPermissionSchema.parse(request.body);

  const userPermission = await createUserPermissionsService({
    user_id,
    permission_id,
  });

  return reply
    .status(201)
    .send({ message: "Permissões liberadas com sucesso!" });
}

export async function deleteUserPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { user_id, permission_id } = userPermissionSchema.parse(request.body);

  const permissionsDeleted = await deleteUserPermissionsService({
    user_id,
    permission_id,
  });

  return reply
    .status(200)
    .send({ message: "Permissões deletadas com sucesso!" });
}
