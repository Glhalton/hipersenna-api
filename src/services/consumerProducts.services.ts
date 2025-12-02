import { prisma } from "../lib/prisma.js";
import {
  ConsumerProducts,
  GetConsumerProducts,
} from "../schemas/consumerProducts.schemas.js";

export const getConsumerProductsService = async ({
  id,
  employee_id,
  branch_id,
  product_code,
  auxiliary_code,
  group_id,
}: GetConsumerProducts) => {
  const whereClause = {};
};

export const createConsumerProductsService = async ({
  branch_id,
  product_code,
  auxiliary_code,
  quantity,
  unit_price,
  group_id,
}: ConsumerProducts, employee_id: number) => {
  const total_price = quantity * unit_price;

  return prisma.hsconsumer_products.create({
    data: {
      employee_id,
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
      unit_price,
      group_id,
      total_price,
    },
  });
};

export const updateConsumerProductsService = async () => {};

export const deleteConsumerProductsService = async () => {};
