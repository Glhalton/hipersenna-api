import { FastifyRequest, FastifyReply } from "fastify";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  userIdSchema,
} from "../schemas/users.schemas.js";
import {
  createUserService,
  deleteUserService,
  findUser,
  getUserService,
  updateUserService,
} from "../services/users.services.js";

export async function getUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id, branch_id, name, username, winthor_id, role_id } =
    getUserSchema.parse(request.query);
  const user = await getUserService({
    id,
    branch_id,
    name,
    username,
    winthor_id,
    role_id,
  });

  return reply.status(200).send(user);
}

export async function getMeController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const id = request.user?.id;
  const user = await getUserService({ id });

  return reply.status(200).send(user);
}

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name, username, password, branch_id, winthor_id, role_id } =
    createUserSchema.parse(request.body);

  const userCreated = await createUserService({
    name,
    username,
    password,
    branch_id,
    winthor_id,
    role_id,
  });

  return reply.status(201).send(userCreated);
}

export async function updateUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = userIdSchema.parse(request.params);
  const userData = updateUserSchema.parse(request.body);

  const userUpdated = await updateUserService(id, userData);
  return reply.status(200).send(userUpdated);
}

export async function deleteUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = userIdSchema.parse(request.params);

  const userDeleted = await deleteUserService(id);
  return reply.status(200).send(userDeleted);
}

export async function getTokenDataController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply.send(request.user);
}
