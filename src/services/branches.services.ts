import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import {
  BranchDescription,
  BranchesId,
  GetBranches,
} from "../schemas/branches.schemas.js";

export const getBranchesService = async ({ id }: GetBranches) => {
  return await prisma.hsbranches.findMany({
    where: { id },
  });
};

export const createBranchesService = async ({
  description,
}: BranchDescription) => {
  return await prisma.hsbranches.create({
    data: {
      description,
    },
  });
};

export const updateBranchesService = async (
  { description }: BranchDescription,
  id: number
) => {
  try {
    return await prisma.hsbranches.update({
      where: { id },
      data: { description },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Filial não encontrada!");
    }
    throw error;
  }
};

export const deleteBranchesService = async ({ id }: BranchesId) => {
  try {
    return await prisma.hsbranches.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Filial não encontrada!");
    }
    throw error;
  }
};
