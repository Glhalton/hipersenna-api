import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import {
  ConsumptionGroups,
  GetConsumptionGroups,
} from "../schemas/consumptionGroups.schemas.js";

export const getConsumptionGroupsService = async ({
  id,
}: GetConsumptionGroups) => {
  return await prisma.hsconsumption_groups.findMany({
    where: { id },
    orderBy: {
      created_at: "asc",
    },
  });
};

export const createConsumptionGroupsService = async ({
  description,
}: ConsumptionGroups) => {
  return await prisma.hsconsumption_groups.create({
    data: { description },
  });
};

export const updateConsumptionGroupsService = async (
  id: number,
  { description }: ConsumptionGroups
) => {
  try {
    return await prisma.hsconsumption_groups.update({
      where: { id },
      data: { description },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Grupo de consumo não encontrado");
    }
    throw error;
  }
};

export const deleteConsumptionGroupsService = async (id: number) => {
  try {
    return await prisma.hsconsumption_groups.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Grupo de consumo não encontrado!");
    }
    throw error;
  }
};
