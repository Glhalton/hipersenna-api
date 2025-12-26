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
  const { userId, sessionId } = getSessionSchema.parse(request.query);

  const session = await getSessionsService({ sessionId, userId });

  return reply.status(200).send(session);
}

export async function deleteMySessionController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const token = request.headers.authorization?.replace("Bearer ", "");

  const deletedSession = await deleteMySessionService(token!);

  return reply.status(200).send({ message: "Signout realizado com sucesso" });
}

export async function deleteSessionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = sessionIdSchema.parse(request.params);
  const myId = request.user?.id;

  const sessionDeleted = await deleteSessionsService({ id }, myId!);

  return reply.status(200).send({ message: "Sessão deletada com sucesso!" });
}

export async function deleteAllSessionsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const myId = request.user?.id;

  const deletedSessions = await deleteAllSessionsService(myId!);

  return reply.status(200).send({
    message: "Todas as sessões foram deletadas!",
  });
}
