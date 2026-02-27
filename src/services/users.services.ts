import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import {
  UpdateUserInput,
  CreateUserInput,
  GetUserInput,
} from "../schemas/users.schemas.js";
import { Conflict } from "../errors/conflict.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { MappedUser, User } from "../schemas/signin.schemas.js";
import { Unauthorized } from "../errors/unauthorized.error.js";

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
      "Username ou código do winthor já cadastrados no sistema!",
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

export const getMeService = async (id: number) => {
  const user = await prisma.hsemployees.findFirst({
    where: {
      id,
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
      role: {
        select: {
          id: true,
          description: true,
          hsroles_permissions: {
            select: {
              permission_id: true,
            },
          },
        },
      },
      hsemployeeBranches: {
        select: {
          branch_id: true,
          branch: {
            select: {
              description: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new Unauthorized("Token inválido ou sessão não encontrada!");
  }

  const mappedUser = mapUserService(user);

  return mappedUser;
};

export const mapUserService = (user: User): MappedUser => {
  const userPermissions = user.hsusers_permissions.map((p) => p.permission_id);

  const rolePermissions = user.role.hsroles_permissions.map(
    (p) => p.permission_id,
  );

  const mergedPermissions = Array.from(
    new Set([...userPermissions, ...rolePermissions]),
  );

  const branches = user.hsemployeeBranches.map((item) => ({
    branch_id: item.branch_id,
    description: item.branch.description,
  }));

  return {
    id: user.id,
    branch_id: user.branch_id,
    winthor_id: user.winthor_id,
    name: user.name,
    username: user.username,
    created_at: user.created_at,
    modified_at: user.modified_at,
    branches,
    role: {
      role_id: user.role.id,
      description: user.role.description,
      permissions: rolePermissions,
    },
    userPermissions: userPermissions,
    allPermissions: mergedPermissions,
  };
};
