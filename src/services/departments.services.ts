import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateDepartment,
  GetDepartment,
  UpdateDepartment,
} from "../schemas/departments.schemas.js";

export const getDepartmentService = async ({
  id,
  winthor_id,
  description,
}: GetDepartment) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (winthor_id) whereClause.id = id;
  if (description) whereClause.id = id;

  return await prisma.hsdepartments.findMany({
    where: whereClause,
  });
};

export const createDepartmentService = async ({
  winthor_id,
  description,
}: CreateDepartment) => {
  return await prisma.hsdepartments.create({
    data: {
      winthor_id,
      description,
    },
  });
};

export const updateDepartmentService = async (
  { winthor_id, description }: UpdateDepartment,
  id: number,
) => {
  try {
    return await prisma.hsdepartments.update({
      where: { id },
      data: {
        winthor_id,
        description,
      },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new NotFound("Departamento não encontrado!");
    }
    throw error;
  }
};

export const deleteDepartmentService = async (id: number) => {
  try {
    return await prisma.hsdepartments.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new NotFound("Departamento não encontrado!");
    }
    throw error;
  }
};
