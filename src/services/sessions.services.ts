import { prisma } from "../lib/prisma.js";
import {
  sessionIdSchemaInput,
  sessionSchemaInput,
} from "../schemas/sessions.schemas.js";

export const getSessionsService = async ({
  sessionId,
  userId,
}: sessionSchemaInput) => {
  const whereClause: any = {};

  if (sessionId) whereClause.id = sessionId;
  if (userId) whereClause.user_id = userId;

  return await prisma.hssessions.findMany({
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
};

export const deleteSessionsService = async (
  { id }: sessionIdSchemaInput,
  userId: number
) => {
  const whereClause: any = {};

  const session = await getSessionsService({ userId });

  if (session[0].id == id) {
    throw new Error("Não é possivel deletar a própria sessão");
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
  return await prisma.hssessions.deleteMany({
    where: {
      user_id: {
        not: userId,
      },
    },
  });
};
