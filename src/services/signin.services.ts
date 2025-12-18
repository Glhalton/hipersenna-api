import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import { signInInput } from "../schemas/signin.schemas.js";
import { includes } from "zod";

type User = {
  id: number;
  branch_id: number;
  winthor_id: number;
  role_id: number;
  password: string;
  name: string;
  username: string;
  created_at: Date;
  modified_at: Date;
  hsusers_permissions: {
    permission_id: number;
    hspermissions: {
      description: string;
    };
  }[];
  role: {
    id: number;
    description: string;
    hsroles_permissions: { permission_id: number }[];
  };
};

type MappedUser = {
  id: number;
  branch_id: number;
  winthor_id: number;
  name: string;
  username: string;
  created_at: Date;
  modified_at: Date;
  role: {
    role_id: number;
    description: string;
    permissions: number[];
  };
  userPermissions: number[];
  allPermissions: number[];
};

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
    },
  });

  if (!user) {
    return false;
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) {
    return false;
  }

  function mapUser(user: User): MappedUser {
    const userPermissions = user.hsusers_permissions.map(
      (p) => p.permission_id
    );

    const rolePermissions = user.role.hsroles_permissions.map(
      (p) => p.permission_id
    );

    const mergedPermissions = Array.from(
      new Set([...userPermissions, ...rolePermissions])
    );

    return {
      id: user.id,
      branch_id: user.branch_id,
      winthor_id: user.winthor_id,
      name: user.name,
      username: user.username,
      created_at: user.created_at,
      modified_at: user.modified_at,
      role: {
        role_id: user.role.id,
        description: user.role.description,
        permissions: rolePermissions,
      },
      userPermissions: userPermissions,
      allPermissions: mergedPermissions,
    };
  }

  return mapUser(user);
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
