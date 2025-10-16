import z from "zod";
import { prisma } from "../../lib/prisma";
import { userRoleSchema } from "./schema";

type CreateUserRolesInput = z.infer<typeof userRoleSchema>

export const getUserRolesById = async (userId: number) => {
    return await prisma.hsusers_permissions.findMany({
        where: {user_id: userId},
    })
}

export const createUserRoles = async (data: CreateUserRolesInput) => {
  return await prisma.hsusers_roles.create({
    data: {
      user_id: data.user_id,
      role_id: data.role_id,
    },
  });
};

export const deleteUserRoles = async (userId: number, roleId: number) => {
  return await prisma.hsusers_roles.delete({
    where: {
      user_id_role_id: { user_id: userId, role_id: roleId },
    },
  });
};

export const createRolePermissions = async (
  roleId: number,
  permissionId: number
) => {
  return await prisma.hspermissions_roles.create({
    data: {
      permission_id: permissionId,
      role_id: roleId,
    },
  });
};

export const deleteRolePermissions = async (
  roleId: number,
  permissionId: number
) => {
  return await prisma.hspermissions_roles.delete({
    where: {
      role_id_permission_id: { permission_id: permissionId, role_id: roleId },
    },
  });
};
