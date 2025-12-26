import { Conflict } from "../errors/conflict.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import { RolePermission } from "../schemas/rolesPermissions.schemas.js";

export const getRolePermissionsService = async (id: number) => {
  return await prisma.hsroles_permissions.findMany({
    where: { role_id: id },
    select: {
      role_id: true,
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

export const createRolePermissionsService = async ({
  permission_id,
  role_id,
}: RolePermission) => {
  const permissions = await getRolePermissionsService(role_id);

  const existingIds = new Set(permissions.map((p) => p.permission_id));
  const duplicated = permission_id.filter((pid) => existingIds.has(pid));

  if (duplicated.length > 0) {
    throw new Conflict(
      `O cargo já possui as seguintes permissões: ${duplicated}`
    );
  }

  const records = permission_id.map((pid) => ({
    permission_id: pid,
    role_id,
  }));

  try {
    return await prisma.hsroles_permissions.createMany({
      data: records,
    });
  } catch (error: any) {
    if (error.code == "P2003") {
      throw new NotFound("Permissão ou cargo não encontrado!");
    }
    throw error;
  }
};

export const deleteRolePermissionsService = async ({
  permission_id,
  role_id,
}: RolePermission) => {
  const existing = await prisma.hsroles_permissions.findMany({
    where: {
      role_id,
      permission_id: { in: permission_id },
    },
  });

  if (existing.length !== permission_id.length) {
    throw new NotFound("O cargo não possui todas as permissões informadas.");
  }

  return await prisma.hsroles_permissions.deleteMany({
    where: {
      role_id,
      permission_id: { in: permission_id },
    },
  });
};
