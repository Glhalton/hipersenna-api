import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import { signInInput } from "../schemas/signin.schemas.js";

export const signInService = async ({ password, username }: signInInput) => {
  const responseSignIn = await prisma.hsemployees.findFirst({
    where: {
      username: username,
    },
    select: {
      id: true,
      branch_id: true,
      winthor_id: true,
      name: true,
      password: true,
      username: true,
      created_at: true,
      modified_at: true,
      hsusers_roles: {
        select: {
          role_id: true,
        },
      },
    },
  });

  if (!responseSignIn) {
    return false;
  }

  const isCorrectPassword = await bcrypt.compare(
    password,
    responseSignIn.password
  );

  if (!isCorrectPassword) {
    return false;
  }

  return responseSignIn;
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
