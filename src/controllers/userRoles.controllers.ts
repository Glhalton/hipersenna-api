import { FastifyRequest, FastifyReply } from "fastify";
import { userIdSchema, userRoleSchema } from '../schemas/userRoles.schemas.js';
import {
  createUserRolesService,
  deleteUserRolesService,
  getUserRolesService,
} from '../services/userRoles.services.js';

export async function getUserRolesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = userIdSchema.parse(request.params);
    const roles = await getUserRolesService(id);

    if (roles.length === 0) {
      throw new Error("Nenhum cargo encontrado para esse usuário!");
    }

    return reply.status(200).send(roles);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function createUserRolesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsedData = userRoleSchema.parse(request.body);
    const userRole = await createUserRolesService(parsedData);
    return reply.status(201).send(userRole);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteUserRolesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsedData = userRoleSchema.parse(request.body);

    const deletedUserRole = await deleteUserRolesService(parsedData);

    return reply.status(200).send(deletedUserRole);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
