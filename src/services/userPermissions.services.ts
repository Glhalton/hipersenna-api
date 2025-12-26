import { Conflict } from "../errors/conflict.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import { UserPermission } from "../schemas/userPermissions.schemas.js";

export const getUserPermissionsService = async (id: number) => {
  return await prisma.hsusers_permissions.findMany({
    where: { user_id: id },
    select: {
      user_id: true,
      permission_id: true,
      hspermissions: {
        select: {
          id: true,
          name: true,
          description: true,
        },
      },
    },
  });
};

export const createUserPermissionsService = async ({
  permission_id,
  user_id,
}: UserPermission) => {
  const permissions = await getUserPermissionsService(user_id);

  const existingIds = new Set(permissions.map((p) => p.permission_id));
  const duplicated = permission_id.filter((pid) => existingIds.has(pid));

  if (duplicated.length > 0) {
    throw new Conflict(
      `O usuário já possui seguintes permissões: ${duplicated}`
    );
  }

  const records = permission_id.map((pid) => ({
    permission_id: pid,
    user_id,
  }));
  try {
    return await prisma.hsusers_permissions.createMany({
      data: records,
      skipDuplicates: true,
    });
  } catch (error: any) {
    if (error.code == "P2003") {
      throw new NotFound("Permissão ou usuário não encontrado!");
    }
    throw error;
  }
};

export const deleteUserPermissionsService = async ({
  permission_id,
  user_id,
}: UserPermission) => {
  const existing = await prisma.hsusers_permissions.findMany({
    where: {
      user_id,
      permission_id: { in: permission_id },
    },
  });

  if (existing.length !== permission_id.length) {
    throw new NotFound("O usuário não possui todas as permissões informadas!");
  }

  return await prisma.hsusers_permissions.deleteMany({
    where: {
      user_id,
      permission_id: { in: permission_id },
    },
  });
};
