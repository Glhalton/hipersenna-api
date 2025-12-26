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

  if (roles.length === 0) {
    throw new NotFound("Cargo não encontrado!");
  }

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
  const role = await getRoleService({ id });

  if (role.length === 0) {
    throw new NotFound("Cargo não encontrado!");
  }

  return await prisma.hsroles.update({
    where: {
      id,
    },
    data: {
      name,
      description,
    },
  });
};

export const deleteRoleService = async (id: number) => {
  const role = await getRoleService({ id });

  if (role.length === 0) {
    throw new NotFound("Cargo não encontrado!");
  }

  return await prisma.hsroles.delete({
    where: {
      id,
    },
  });
};
