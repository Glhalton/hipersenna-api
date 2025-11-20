import { FastifyReply, FastifyRequest } from "fastify";
import { sessionIdSchema, sessionSchema } from "../schemas/sessions.schemas.js";
import {
  deleteAllSessionsService,
  deleteMySessionService,
  deleteSessionsService,
  getSessionsService,
} from "../services/sessions.services.js";

export async function getSessionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { userId, sessionId } = sessionSchema.parse(request.query);

    const sessionData = await getSessionsService({ sessionId, userId });

    return reply.status(200).send(sessionData);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteMySessionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const token = request.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return reply.status(401).send({ message: "Token não fornecido" });
    }

    const deletedSession = await deleteMySessionService(token);

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

export async function deleteSessionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const {id} = sessionIdSchema.parse(request.params);
    const myId = request.user?.id;

    if (!myId) {
      throw new Error("Id de usuário inválido");
    }

    const sessionDeleted = await deleteSessionsService(
      {id},
      myId
    );

    return reply.status(200).send(sessionDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteAllSessionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const myId = request.user?.id;

    if (!myId) {
      throw new Error("Id de usuário inválido");
    }

    const deletedSessions = await deleteAllSessionsService(myId);

    return reply.status(200).send(deletedSessions);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
