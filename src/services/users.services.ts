import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import { UpdateUserInput, CreateUserInput } from "../schemas/users.schemas";

export const getAllUsersService = async () => {
  return await prisma.hsemployees.findMany({
    select: {
      id: true,
      branch_id: true,
      winthor_id: true,
      name: true,
      username: true,
      created_at: true,
      modified_at: true,
      hsusers_roles: {
        select: {
          role_id: true,
          hsroles: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
        },
      },
    },
  });
};

export const getUserService = async (id: number) => {
  return await prisma.hsemployees.findFirst({
    where: { id },
    select: {
      id: true,
      branch_id: true,
      winthor_id: true,
      name: true,
      username: true,
      created_at: true,
      modified_at: true,
      hsusers_roles: {
        select: {
          role_id: true,
          hsroles: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
        },
      },
    },
  });
};

export const createUserService = async ({name, username, password, branch_id, winthor_id}: CreateUserInput) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.hsemployees.create({
    data: {
      name: name,
      username: username,
      branch_id: branch_id,
      password: hashedPassword,
      winthor_id: winthor_id,
    },
  });
};

export const deleteUserService = async (userId: number) => {
  return await prisma.hsemployees.delete({
    where: {
      id: userId,
    },
  });
};

export const updateUserService = async (id: number, data: UpdateUserInput) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return await prisma.hsemployees.update({
    where: { id },
    data,
  });
};

export const deleteSessionService = async (token: string) => {
  return await prisma.hssessions.delete({
    where: {
      token,
    },
  });
};

export const findUser = async (winthor_id: number, username: string) => {
  return await prisma.hsemployees.findFirst({
    where: {
      OR: [{ username: username }, { winthor_id: winthor_id }],
    },
  });
};
