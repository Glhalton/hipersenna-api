import { prisma } from '../lib/prisma.js';
import { UserPermission } from '../schemas/userPermissions.schemas.js';

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
  const records = permission_id.map((pid) => ({
    permission_id: pid,
    user_id,
  }));

  return await prisma.hsusers_permissions.createMany({
    data: records,
    skipDuplicates: true,
  });
};

export const deleteUserPermissionsService = async ({
  permission_id,
  user_id,
}: UserPermission) => {
  return await prisma.hsusers_permissions.deleteMany({
    where: {
      OR: permission_id.map((pid) => ({
        user_id,
        permission_id: pid,
      })),
    },
  });
};
