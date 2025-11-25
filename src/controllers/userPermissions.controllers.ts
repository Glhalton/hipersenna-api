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
  try {
    const { id } = userIdSchema.parse(request.params);
    const permissions = await getUserPermissionsService(id);

    if (permissions.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nenhuma permissão encontrada para esse usuário" });
    }

    return reply.status(200).send(permissions);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function createUserPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { user_id, permission_id } = userPermissionSchema.parse(request.body);

    const permissions = await getUserPermissionsService(user_id);

    if (
      permissions.some((item) => permission_id.includes(item.permission_id))
    ) {
      return reply.status(400).send({
        message: "O usuário já possui uma das permissões mencionadas.",
      });
    }

    const userPermission = await createUserPermissionsService({
      user_id,
      permission_id,
    });

    return reply
      .status(201)
      .send({ message: "Permissões liberadas com sucesso!" });
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteUserPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { user_id, permission_id } = userPermissionSchema.parse(request.body);

    const permissions = await getUserPermissionsService(user_id);

    if (
      !permissions.some((item) => permission_id.includes(item.permission_id))
    ) {
      return reply.status(400).send({
        message: "O usuário não possui alguma das permissões mencionadas.",
      });
    }

    const permissionsDeleted = await deleteUserPermissionsService({
      user_id,
      permission_id,
    });

    return reply
      .status(200)
      .send({ message: "Permissões deletadas com sucesso!" });
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
