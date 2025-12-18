import { prisma } from '../lib/prisma.js';
import { RolePermission } from '../schemas/rolesPermissions.schemas.js';

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
  const records = permission_id.map((pid) => ({
    permission_id: pid,
    role_id,
  }));

  return await prisma.hsroles_permissions.createMany({
    data: records,
    skipDuplicates: true,
  });
};

export const deleteRolePermissionsService = async ({
  permission_id,
  role_id,
}: RolePermission) => {
  return await prisma.hsroles_permissions.deleteMany({
    where: {
      OR: permission_id.map((pid) => ({
        role_id,
        permission_id: pid,
      })),
    },
  });
};
