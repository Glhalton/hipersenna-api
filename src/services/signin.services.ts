import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import { signInInput } from "../schemas/signin.schemas.js";
import { includes } from "zod";

export const signInService = async ({ password, username }: signInInput) => {
  const user = await prisma.hsemployees.findFirst({
    where: {
      username: username,
    },
    select: {
      id: true,
      branch_id: true,
      winthor_id: true,
      role_id: true,
      name: true,
      password: true,
      username: true,
      created_at: true,
      modified_at: true,
      hsusers_permissions: {
        select: {
          permission_id: true,
          hspermissions: {
            select: {
              description: true,
            },
          },
        },
      },
    },
  });


  if (!user) {
    return false;
  }

  const isCorrectPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!isCorrectPassword) {
    return false;
  }

  const {password: _, ...safeUser} = user;

  return safeUser;
};

export const createSessionService = async (
  user_id: number,
  token: string,
  expires_at?: any
) => {
  return await prisma.hssessions.create({
    data: {
      user_id,
      token,
      expires_at,
    },
  });
};

export const deleteSessionService = async (user_id: number) => {
  return await prisma.hssessions.deleteMany({
    where: { user_id },
  });
};
