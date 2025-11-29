import { FastifyReply, FastifyRequest } from "fastify";
import {
  sessionIdSchema,
  getSessionSchema,
} from "../schemas/sessions.schemas.js";
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
    const { userId, sessionId } = getSessionSchema.parse(request.query);

    const sessionData = await getSessionsService({ sessionId, userId });

    if (!sessionData || sessionData.length == 0) {
      return reply.status(404).send({ message: "Sessão não encontrada!" });
    }

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
    const { id } = sessionIdSchema.parse(request.params);
    const myId = request.user?.id;

    if (!myId) {
      throw new Error("Id de usuário inválido");
    }

    const session = await getSessionsService({ sessionId: id });
    if (!session || session.length === 0) {
      return reply.status(404).send({ message: "Sessão não encontrada!" });
    }

    const sessionDeleted = await deleteSessionsService({ id }, myId);

    return reply.status(200).send({message: "Sessão deletada com sucesso!"});
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

    const session = await getSessionsService({});
    if (!session || session.length === 1) {
      return reply.status(404).send({ message: "Nenhuma sessão encontrada!" });
    }

    const deletedSessions = await deleteAllSessionsService(myId);

    return reply
      .status(200)
      .send({ message: "Todas as sessões foram deletadas!" });
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
