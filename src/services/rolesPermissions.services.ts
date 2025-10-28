import { prisma } from "../lib/prisma";
import { RolePermissionInput } from "../schemas/rolesPermissions.schemas";

export const getRolePermissionsService = async (id: number) => {
  return await prisma.hspermissions_roles.findMany({
    where: { role_id: id },
    select: {
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
}: RolePermissionInput) => {
  const records = permission_id.map((pid) => ({
    permission_id: pid,
    role_id,
  }));

  return await prisma.hspermissions_roles.createMany({
    data: records,
    skipDuplicates: true,
  });
};

export const deleteRolePermissionsService = async ({
  permission_id,
  role_id,
}: RolePermissionInput) => {
  return await prisma.hspermissions_roles.deleteMany({
    where: {
      OR: permission_id.map((pid) => ({
        role_id,
        permission_id: pid,
      })),
    },
  });
};
