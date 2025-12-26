import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import {
  UpdateUserInput,
  CreateUserInput,
  GetUserInput,
} from "../schemas/users.schemas.js";
import { Conflict } from "../errors/conflict.error.js";
import { NotFound } from "../errors/notFound.error.js";

export const getUserService = async ({
  id,
  name,
  winthor_id,
  username,
  branch_id,
}: GetUserInput) => {
  const whereClause: any = {};
  if (id) whereClause.id = id;
  if (name) whereClause.name = name;
  if (winthor_id) whereClause.winthor_id = winthor_id;
  if (username) whereClause.username = username;
  if (branch_id) whereClause.branch_id = branch_id;

  return await prisma.hsemployees.findMany({
    where: whereClause,
    select: {
      id: true,
      branch_id: true,
      winthor_id: true,
      role_id: true,
      name: true,
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
};

export const createUserService = async ({
  name,
  username,
  password,
  branch_id,
  winthor_id,
  role_id,
}: CreateUserInput) => {
  const user = await findUser(winthor_id, username);

  if (user) {
    throw new Conflict(
      "Username ou código do winthor já cadastrados no sistema!"
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.hsemployees.create({
    data: {
      name: name,
      username: username,
      branch_id: branch_id,
      password: hashedPassword,
      winthor_id: winthor_id,
      role_id: role_id,
    },
  });
};

export const updateUserService = async (id: number, data: UpdateUserInput) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  try {
    return await prisma.hsemployees.update({
      where: { id },
      data,
      select: {
        id: true,
        branch_id: true,
        winthor_id: true,
        role_id: true,
        name: true,
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
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Usuário não encontrado!");
    }
    throw error;
  }
};

export const deleteUserService = async (userId: number) => {
  try {
    return await prisma.hsemployees.delete({
      where: {
        id: userId,
      },
      select: {
        id: true,
        branch_id: true,
        winthor_id: true,
        role_id: true,
        name: true,
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
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Usuário não encontrado!");
    }
    throw error;
  }
};

export const findUser = async (winthor_id: number, username: string) => {
  return await prisma.hsemployees.findFirst({
    where: {
      OR: [{ username: username }, { winthor_id: winthor_id }],
    },
  });
};
