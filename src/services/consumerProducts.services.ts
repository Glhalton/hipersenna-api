import { prisma } from "../lib/prisma.js";
import {
  CreateConsumerProducts,
  GetConsumerProducts,
  UpdateConsumerProducts,
} from "../schemas/consumerProducts.schemas.js";

export const getConsumerProductsService = async ({
  id,
  employee_id,
  branch_id,
  product_code,
  auxiliary_code,
  group_id,
}: GetConsumerProducts) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (employee_id) whereClause.employee_id = employee_id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (product_code) whereClause.product_code = product_code;
  if (auxiliary_code) whereClause.auxiliary_code = auxiliary_code;
  if (group_id) whereClause.group_id = group_id;

  return await prisma.hsconsumer_products.findMany({
    where: whereClause,
  });
};

export const createConsumerProductsService = async (
  {
    branch_id,
    product_code,
    auxiliary_code,
    quantity,
    group_id,
  }: CreateConsumerProducts,
  employee_id: number
) => {
  return prisma.hsconsumer_products.create({
    data: {
      employee_id,
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
      group_id,
    },
  });
};

export const updateConsumerProductsService = async (
  {
    product_code,
    auxiliary_code,
    branch_id,
    quantity,
    group_id,
  }: UpdateConsumerProducts,
  id: number
) => {
  return await prisma.hsconsumer_products.update({
    data: {
      product_code,
      auxiliary_code,
      branch_id,
      quantity,
      group_id,
    },
    where: { id },
  });
};

export const deleteConsumerProductsService = async (id: number) => {
  return await prisma.hsconsumer_products.delete({
    where: { id },
  });
};
