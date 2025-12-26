import { Conflict } from "../errors/conflict.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import { SessionId, GetSession } from "../schemas/sessions.schemas.js";

export const getSessionsService = async ({ sessionId, userId }: GetSession) => {
  const whereClause: any = {};

  if (sessionId) whereClause.id = sessionId;
  if (userId) whereClause.user_id = userId;

  const sessions = await prisma.hssessions.findMany({
    where: whereClause,
    select: {
      id: true,
      created_at: true,
      expires_at: true,
      user: {
        select: {
          id: true,
          winthor_id: true,
          name: true,
          username: true,
        },
      },
    },
  });

  if (sessions.length === 0) {
    throw new NotFound("Sessão não encontrada!");
  }

  return sessions;
};

export const deleteMySessionService = async (token: string) => {
  const sessionDeleted = await prisma.hssessions.delete({
    where: {
      token,
    },
  });

  if (!sessionDeleted) {
    throw new NotFound("Sessão não encontrada!");
  }

  return sessionDeleted;
};

export const deleteSessionsService = async (
  { id }: SessionId,
  userId: number
) => {
  const whereClause: any = {};

  const session = await getSessionsService({ sessionId: id });

  if (session.length === 0) {
    throw new NotFound("Sessão não encontrada!");
  }

  if (session[0].user.id == userId) {
    throw new Conflict("Não é possivel deletar a própria sessão");
  }

  return await prisma.hssessions.delete({
    where: { id },
    select: {
      id: true,
      created_at: true,
      expires_at: true,
      user: {
        select: {
          id: true,
          winthor_id: true,
          name: true,
          username: true,
        },
      },
    },
  });
};

export const deleteAllSessionsService = async (userId: number) => {
  const sessions = await getSessionsService({});

  if (sessions.length === 1) {
    throw new NotFound("Nenhuma sessão encontrada!");
  }

  return await prisma.hssessions.deleteMany({
    where: {
      user_id: {
        not: userId,
      },
    },
  });
};
