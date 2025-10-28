import { FastifyRequest, FastifyReply } from "fastify";
import {
  userIdSchema,
  userPermissionSchema,
} from "../schemas/userPermissions.schemas";
import {
  createUserPermissionsService,
  deleteUserPermissionsService,
  getUserPermissionsService,
} from "../services/userPermissions.services";

export async function getUserPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = userIdSchema.parse(request.params);
    const permissions = await getUserPermissionsService(id);

    if (permissions.length === 0) {
      throw new Error("Nenhuma permissão encontrada para esse usuário");
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
    const parsedData = userPermissionSchema.parse(request.body);
    const userPermission = await createUserPermissionsService(parsedData);

    return reply.status(201).send(userPermission);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteUserPermissionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsedData = userPermissionSchema.parse(request.body);
    const permissionsDeleted = await deleteUserPermissionsService(parsedData);

    return reply.status(201).send(permissionsDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
