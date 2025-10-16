import { prisma } from "../../lib/prisma";
import z from "zod";
import { permissionSchema, permissionUpdateSchema } from "./schema";

type CreatePermissionInput = z.infer<typeof permissionSchema>;
type UpdatePermissionInput = z.infer<typeof permissionUpdateSchema>;

export const getPermissions = async () => {
  return await prisma.hspermissions.findMany();
};

export const getPermissionById = async (id: number) => {
  return await prisma.hspermissions.findUnique({
    where: {
      id,
    },
  });
};

export const createPermission = async (data: CreatePermissionInput) => {
  return await prisma.hspermissions.create({
    data,
  });
};

export const deletePermission = async (id: number) => {
  return await prisma.hspermissions.delete({
    where: { id },
  });
};

export const updatePermission = async (
  id: number,
  data: UpdatePermissionInput
) => {
  return await prisma.hspermissions.update({
    where: { id },
    data,
  });
};
