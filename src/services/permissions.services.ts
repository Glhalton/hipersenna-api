import { prisma } from '../lib/prisma.js';
import {
  PermissionInput,
  UpdatePermissionInput,
} from '../schemas/permissions.schemas.js';

export const getAllPermissionsService = async () => {
  return await prisma.hspermissions.findMany();
};

export const getPermissionService = async (id: number) => {
  return await prisma.hspermissions.findUnique({
    where: {
      id,
    },
  });
};

export const createPermissionService = async ({
  description,
  name,
}: PermissionInput) => {
  return await prisma.hspermissions.create({
    data: {
      description,
      name,
    },
  });
};

export const deletePermissionService = async (id: number) => {
  return await prisma.hspermissions.delete({
    where: { id },
  });
};

export const updatePermissionService = async (
  id: number,
  { description, name }: UpdatePermissionInput
) => {
  return await prisma.hspermissions.update({
    where: { id },
    data: {
      description,
      name,
    },
  });
};
