import { prisma } from '../lib/prisma.js';
import { UpdateRoleInput, RoleInput } from '../schemas/roles.schemas.js';

export const getAllRolesService = async () => {
  return await prisma.hsroles.findMany();
};

export const getRoleService = async (id: number) => {
  return await prisma.hsroles.findUnique({
    where: {
      id,
    },
  });
};

export const createRoleService = async ({ name, description }: RoleInput) => {
  return await prisma.hsroles.create({
    data: {
      name,
      description,
    },
  });
};

export const deleteRoleService = async (id: number) => {
  return await prisma.hsroles.delete({
    where: {
      id,
    },
  });
};

export const updateRoleService = async (
  id: number,
  { name, description }: UpdateRoleInput
) => {
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
