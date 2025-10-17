import z from "zod";
import { prisma } from "../../lib/prisma";
import { rolePermissionSchema, userRoleSchema } from "./schema";

type UserRolesInput = z.infer<typeof userRoleSchema>;
type RolePermissionsInput = z.infer<typeof rolePermissionSchema>;

export const getUserRolesById = async (userId: number) => {
  return await prisma.hsusers_roles.findMany({
    where: { user_id: userId },
  });
};

export const createUserRoles = async (data: UserRolesInput) => {
  return await prisma.hsusers_roles.create({
    data: {
      user_id: data.user_id,
      role_id: data.role_id,
    },
  });
};

export const deleteUserRoles = async (parsedData: UserRolesInput) => {
  return await prisma.hsusers_roles.delete({
    where: {
      user_id_role_id: {
        user_id: parsedData.user_id,
        role_id: parsedData.role_id,
      },
    },
  });
};

export const createRolePermissions = async (data: RolePermissionsInput) => {
  const { permission_id, role_id } = data;

  const records = permission_id.map((pid) => ({
    permission_id: pid,
    role_id,
  }));

  return await prisma.hspermissions_roles.createMany({
    data: records,
    skipDuplicates: true,
  });
};

export const deleteRolePermissions = async (data: RolePermissionsInput) => {
  const { permission_id, role_id } = data;

  return await prisma.hspermissions_roles.deleteMany({
    where: {
      OR: permission_id.map((pid) => ({
        role_id,
        permission_id: pid,
      })),
    },
  });
};
