import { prisma } from "../lib/prisma.js";
import { consumptionGroups, GetconsumptionGroups } from "../schemas/consumptionGroups.schemas.js";

export const getconsumptionGroupsService = async ({id} : GetconsumptionGroups) => {
  return prisma.hsconsumption_groups.findMany({
    where: {
      id,
    },
  });
};

export const createconsumptionGroupsService = async ({
  description,
}: consumptionGroups) => {
  return prisma.hsconsumption_groups.create({
    data: {
      description,
    },
  });
};

export const updateconsumptionGroupsService = async (
  id: number,
  { description }: consumptionGroups
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
