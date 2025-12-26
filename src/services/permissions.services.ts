import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import {
  Permission,
  UpdatePermission,
  GetPermission,
} from "../schemas/permissions.schemas.js";

export const getPermissionService = async ({
  id,
  name,
  description,
}: GetPermission) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (name) whereClause.name = name;
  if (description) whereClause.description = description;

  return await prisma.hspermissions.findMany({
    where: whereClause,
  });
};

export const createPermissionService = async ({
  name,
  description,
}: Permission) => {
  return await prisma.hspermissions.create({
    data: {
      name,
      description,
    },
  });
};

export const updatePermissionService = async (
  id: number,
  { name, description }: UpdatePermission
) => {
  try {
    return await prisma.hspermissions.update({
      where: { id },
      data: {
        name,
        description,
      },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Permissão não encontrada!");
      throw error;
    }
  }
};

export const deletePermissionService = async (id: number) => {
  try {
    return await prisma.hspermissions.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Permissão não encontrada!");
      throw error;
    }
  }
};
