import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import { UpdateRole, Role, GetRole } from "../schemas/roles.schemas.js";

export const getRoleService = async ({ id, name, description }: GetRole) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (name) whereClause.name = name;
  if (description) whereClause.description = description;

  const roles = await prisma.hsroles.findMany({
    where: whereClause,
  });

  return roles;
};

export const createRoleService = async ({ name, description }: Role) => {
  return await prisma.hsroles.create({
    data: {
      name,
      description,
    },
  });
};

export const updateRoleService = async (
  id: number,
  { name, description }: UpdateRole
) => {
  try {
    return await prisma.hsroles.update({
      where: {
        id,
      },
      data: {
        name,
        description,
      },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Cargo não encontrado!");
    }
    throw error;
  }
};

export const deleteRoleService = async (id: number) => {
  try {
    return await prisma.hsroles.delete({
      where: {
        id,
      },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Cargo não encontrado!");
    }
  }
};
