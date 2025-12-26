import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import { MappedUser, signInInput, User } from "../schemas/signin.schemas.js";
import { Unauthorized } from "../errors/unauthorized.error.js";
import jwt from "jsonwebtoken";

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
    throw new Unauthorized("Usuário ou senha estão incorretos!");
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) {
    throw new Unauthorized("Usuário ou senha estão incorretos!");
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET não definido no .env");
  }

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      username: user.username,
      winthor_id: user.winthor_id,
      branch_id: user.branch_id,
    },
    jwtSecret,
    {
      expiresIn: "12h",
    }
  );

  const decoded: any = jwt.decode(token);
  const expires_at = new Date(decoded.exp * 1000);

  const sessionsDeleted = await deleteSessionsService(user.id);
  const sessionCreated = await createSessionService(user.id, token, expires_at);

  const mappedUser = mapUserService(user);

  return { token, user: mappedUser };
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

export const deleteSessionsService = async (id: number) => {
  return await prisma.hssessions.deleteMany({
    where: {
      user_id: id,
    },
  });
};

export const mapUserService = (user: User): MappedUser => {
  const userPermissions = user.hsusers_permissions.map((p) => p.permission_id);

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
};
