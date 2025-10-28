import { prisma } from "../lib/prisma";
import { UserRoleInput } from "../schemas/userRoles.schemas";

export const getUserRolesService = async (user_id: number) => {
    return await prisma.hsusers_roles.findMany({
        where:{
            user_id
        }, 
        select:{
            role_id: true,
            hsroles: {
                select:{
                    name: true,
                    description: true
                }
            }
        }
    })
}

export const createUserRolesService = async ({role_id, user_id}: UserRoleInput) => {
  return await prisma.hsusers_roles.create({
    data: {
      user_id,
      role_id
    },
  });
};

export const deleteUserRolesService = async ({role_id, user_id}: UserRoleInput) => {
  return await prisma.hsusers_roles.delete({
    where: {
      user_id_role_id: {
        user_id,
        role_id
      },
    },
  });
};
