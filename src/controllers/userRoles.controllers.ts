import { FastifyRequest, FastifyReply } from "fastify";
import { userIdSchema, userRoleSchema } from "../schemas/userRoles.schemas.js";
import {
  createUserRolesService,
  deleteUserRolesService,
  getUserRolesService,
} from "../services/userRoles.services.js";

export async function getUserRolesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = userIdSchema.parse(request.params);
    const roles = await getUserRolesService(id);

    if (roles.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nenhum cargo encontrado para esse usuário!" });
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
    const { user_id, role_id } = userRoleSchema.parse(request.body);

        const roles = await getUserRolesService(user_id);
    
        if (
          roles.some((item) => item.role_id == role_id)
        ) {
          return reply.status(400).send({
            message: "O usuário já possui um dos cargos mencionados.",
          });
        }

    const userRole = await createUserRolesService({ user_id, role_id });
    return reply.status(201).send({message: "Cargos liberados com sucesso!"});
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteUserRolesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const {user_id, role_id} = userRoleSchema.parse(request.body);

    const roles = await getUserRolesService(user_id);

    if (
      !roles.some((item) => item.role_id == role_id)
    ) {
      return reply.status(400).send({
        message: "O usuário não possui um dos cargos mencionados.",
      });
    }

    const deletedUserRole = await deleteUserRolesService({user_id, role_id});

    return reply.status(200).send({message: "Cargos removidos com sucesso!"});
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
