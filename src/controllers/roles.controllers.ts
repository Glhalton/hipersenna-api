import { FastifyRequest, FastifyReply } from "fastify";
import {
  createRoleService,
  deleteRoleService,
  getRoleService,
  updateRoleService,
} from "../services/roles.services.js";
import {
  getRoleSchema,
  roleIdSchema,
  roleSchema,
  updateRoleSchema,
} from "../schemas/roles.schemas.js";

export async function getRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, name, description } = getRoleSchema.parse(request.query);
    const role = await getRoleService({ id, name, description });

    if (!role || role.length == 0) {
      return reply.status(404).send({ message: "Cargo não encontrado!" });
    }

    return reply.status(201).send(role);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const data = roleSchema.parse(request.body);

    const role = await createRoleService(data);

    return reply
      .status(201)
      .send(role);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = roleIdSchema.parse(request.params);

    const data = updateRoleSchema.parse(request.body);

    const role = await getRoleService({ id });
    if (!role || role.length === 0) {
      return reply.status(404).send({ message: "Cargo não encontrado!" });
    }

    const roleUpdated = await updateRoleService(id, data);

    return reply.status(200).send(roleUpdated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = roleIdSchema.parse(request.params);

    const role = await getRoleService({ id });
    if (!role || role.length === 0) {
      return reply.status(404).send({ message: "Cargo não encontrado!" });
    }
    const roleDeleted = await deleteRoleService(id);

    return reply.status(200).send(roleDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
