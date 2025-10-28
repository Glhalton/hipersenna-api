import { FastifyRequest, FastifyReply } from "fastify";
import {
  createUserSchema,
  updateUserSchema,
  userIdSchema,
} from "../schemas/users.schemas";
import {
  createUserService,
  deleteSessionService,
  deleteUserService,
  findUser,
  getAllUsersService,
  getUserService,
  updateUserService,
} from "../services/users.services";

export async function getAllUsersController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const users = await getAllUsersService();

    if (!users) {
      throw new Error("Nenhum usuário encontrado");
    }

    return reply.status(200).send({ users });
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function getUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = userIdSchema.parse(request.params);
    const user = await getUserService(id);

    if (!user) {
      throw new Error("Usuário não encontrado!");
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

    const user = await getUserService(id);
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

    const user = await getUserService(id);
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

export async function signoutController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return reply.status(401).send({ message: "Token não fornecido" });
    }

    const deletedSession = await deleteSessionService(token);

    if (!deletedSession) {
      return reply
        .status(404)
        .send({ message: "Sessão não encontrada ou já expirada" });
    }

    return reply.status(200).send({ message: "Signout realizado com sucesso" });
  } catch (error: any) {
    return reply
      .status(400)
      .send({ message: `Erro no servidor: ${error.message}` });
  }
}

export async function getTokenDataController(request: FastifyRequest, reply: FastifyReply){
    try {
      return reply.send(request.user);
    } catch (error: any) {
      return reply
        .status(400)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
}