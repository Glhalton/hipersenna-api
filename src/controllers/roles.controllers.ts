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
  const { id, name, description } = getRoleSchema.parse(request.query);
  const role = await getRoleService({ id, name, description });

  return reply.status(200).send(role);
}

export async function createRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = roleSchema.parse(request.body);

  const role = await createRoleService(data);

  return reply.status(201).send(role);
}

export async function updateRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = roleIdSchema.parse(request.params);

  const { name, description } = updateRoleSchema.parse(request.body);

  const roleUpdated = await updateRoleService(id, { name, description });

  return reply.status(200).send(roleUpdated);
}

export async function deleteRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = roleIdSchema.parse(request.params);

  const roleDeleted = await deleteRoleService(id);

  return reply.status(200).send(roleDeleted);
}
