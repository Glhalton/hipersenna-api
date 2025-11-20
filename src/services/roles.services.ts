import { prisma } from "../lib/prisma.js";
import { UpdateRole, Role, GetRole } from "../schemas/roles.schemas.js";

// export const getAllRolesService = async () => {
//   return await prisma.hsroles.findMany();
// };

export const getRoleService = async ({ id, name, description }: GetRole) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (name) whereClause.name = name;
  if (description) whereClause.description = description;

  return await prisma.hsroles.findMany({
    where: whereClause,
  });
};

export const createRoleService = async ({ name, description }: Role) => {
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
  { name, description }: UpdateRole
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
