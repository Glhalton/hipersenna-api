import { FastifyRequest, FastifyReply } from "fastify";
import {
  createRoleService,
  deleteRoleService,
  getAllRolesService,
  getRoleService,
  updateRoleService,
} from '../services/roles.services.js';
import {
  roleIdSchema,
  roleSchema,
  updateRoleSchema,
} from '../schemas/roles.schemas.js';

export async function getAllRolesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const roles = await getAllRolesService();

    if (roles.length === 0) {
      throw new Error("Nenhum cargo encontrado");
    }

    return reply.status(201).send(roles);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function getRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = roleIdSchema.parse(request.params);
    const role = await getRoleService(id);

    if (!role) {
      throw new Error("Cargo não encontrado");
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
      .send({ message: "Cargo criado com sucesso!", role });
  } catch (error: any) {
    return reply.status(400).send({ messge: error.message });
  }
}

export async function deleteRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = roleIdSchema.parse(request.params);

    const roleExists = await getRoleService(id);
    if (!roleExists) {
      throw new Error("Cargo não encontrado");
    }
    const role = await deleteRoleService(id);

    return reply.status(200).send(role);
  } catch (error: any) {
    return reply.status(400).send(error.message);
  }
}

export async function updateRoleController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = roleIdSchema.parse(request.params);

    const data = updateRoleSchema.parse(request.body);

    const roleExists = await getRoleService(id);
    if (!roleExists) {
      throw new Error("Cargo não encontrado");
    }

    const role = await updateRoleService(id, data);

    return reply.status(200).send(role);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
