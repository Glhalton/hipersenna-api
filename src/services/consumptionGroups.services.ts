import { prisma } from "../lib/prisma.js";
import { ConsumptionGroups, GetConsumptionGroups } from "../schemas/consumptionGroups.schemas.js";

export const getconsumptionGroupsService = async ({id} : GetConsumptionGroups) => {
  return prisma.hsconsumption_groups.findMany({
    where: {
      id,
    },
  });
};

export const createconsumptionGroupsService = async ({
  description,
}: ConsumptionGroups) => {
  return prisma.hsconsumption_groups.create({
    data: {
      description,
    },
  });
};

export const updateconsumptionGroupsService = async (
  id: number,
  { description }: ConsumptionGroups
) => {
  return prisma.hsconsumption_groups.update({
    where: {
      id,
    },
    data: {
      description,
    },
  });
};

export const deleteconsumptionGroupsService = async (id: number) => {
  return prisma.hsconsumption_groups.delete({
    where: {
      id,
    },
  });
};
