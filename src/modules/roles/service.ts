import z from "zod";
import { prisma } from "../../lib/prisma";
import { roleUpdateSchema } from "./schema";

type UpdateRoleInput = z.infer<typeof roleUpdateSchema>;

export const getRoles = async () => {
  return await prisma.hsroles.findMany();
};

export const getRoleById = async (rolesId: number) => {
  return await prisma.hsroles.findUnique({
    where: {
      id: rolesId,
    },
  });
};

export const deleteRole = async (roleId: number) => {
  return await prisma.hsroles.delete({
    where: {
      id: roleId,
    },
  });
};

export const createRole = async (name: string, description: string) => {
  return await prisma.hsroles.create({
    data: {
      name,
      description,
    },
  });
};

export const updateRole = async (roleId: number, data: UpdateRoleInput) => {
  return await prisma.hsroles.update({
    where: {
      id: roleId,
    },
    data,
  });
};
