import { FastifyRequest, FastifyReply } from "fastify";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  userIdSchema,
} from '../schemas/users.schemas.js';
import {
  createUserService,
  deleteUserService,
  findUser,
  getUserService,
  updateUserService,
} from '../services/users.services.js';

export async function getUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, branch_id, name, username, winthor_id } = getUserSchema.parse(
      request.query
    );
    const user = await getUserService({
      id,
      branch_id,
      name,
      username,
      winthor_id,
    });

    if (!user) {
      return reply.status(404).send({message: "Usuário não encontrado!"})
    }

    return reply.status(200).send({ user });
  } catch (error: any) {
    return reply.status(400).send({ message: ` ${error.message}` });
  }
}

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsedData = createUserSchema.parse(request.body);
    const user = await findUser(parsedData.winthor_id, parsedData.username);

    if (user) {
      return reply.status(409).send({
        message: "Username ou código do winthor já cadastrados no sistema",
      });
    }

    const userCreated = await createUserService(parsedData);

    return reply
      .status(201)
      .send({ message: "Usuário criado com sucesso!", userCreated });
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function deleteUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = userIdSchema.parse(request.params);

    const user = await getUserService({ id });
    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const userDeleted = await deleteUserService(id);
    return reply
      .status(200)
      .send({ message: "Usuário deletado com sucesso!", userDeleted });
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function updateUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = userIdSchema.parse(request.params);

    const user = await getUserService({ id });
    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const userData = updateUserSchema.parse(request.body);

    const userUpdated = await updateUserService(id, userData);
    return reply.status(200).send({ userUpdated });
  } catch (error: any) {
    return reply.status(400).send({ message: ` ${error.message}` });
  }
}

export async function getTokenDataController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    return reply.send(request.user);
  } catch (error: any) {
    return reply
      .status(400)
      .send({ message: `Erro no servidor: ${error.message}` });
  }
}
