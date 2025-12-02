import { prisma } from "../lib/prisma.js";
import { ConsumerGroups } from "../schemas/consumerGroups.schemas.js";

export const getConsumerGroupsService = async (id: number) => {
  return prisma.hsconsumer_groups.findMany({
    where: {
      id,
    },
  });
};

export const createConsumerGroupsService = async ({
  description,
}: ConsumerGroups) => {
  return prisma.hsconsumer_groups.create({
    data: {
      description,
    },
  });
};

export const updateConsumerGroupsService = async (
  id: number,
  { description }: ConsumerGroups
) => {
  return prisma.hsconsumer_groups.update({
    where: {
      id,
    },
    data: {
      description,
    },
  });
};

export const deleteConsumerGroupsService = async (id: number) => {
  return prisma.hsconsumer_groups.delete({
    where: {
      id,
    },
  });
};
