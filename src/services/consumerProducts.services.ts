import { getOracleConnection } from "../lib/oracleClient.js";
import { prisma } from "../lib/prisma.js";
import oracledb from "oracledb";
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
  consumption_id,
}: GetConsumerProducts) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (employee_id) whereClause.employee_id = employee_id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (product_code) whereClause.product_code = product_code;
  if (auxiliary_code) whereClause.auxiliary_code = auxiliary_code;
  if (group_id) whereClause.group_id = group_id;
  if (consumption_id) {
    whereClause.consumption_id = consumption_id;
  } else {
    whereClause.consumption_id = null
  }

  const postgresData = await prisma.hsconsumer_products.findMany({
    where: whereClause,
  });

  const allCodes = postgresData.flatMap((p) => p.product_code);

  if (allCodes.length === 0) return postgresData;

  const connection = await getOracleConnection();

  const query = `
    SELECT codprod, descricao
    FROM pcprodut
    WHERE codprod IN (${allCodes.map(() => ":code").join(",")})
  `;

  const result = await connection.execute(query, allCodes, {
    outFormat: oracledb.OUT_FORMAT_OBJECT,
  });

  await connection.close();

  const descricaoMap: Record<string, string> = {};
  (result.rows || []).forEach((row: any) => {
    descricaoMap[row.CODPROD] = row.DESCRICAO;
  });

  const enrichedData = postgresData.map((item) => ({
    ...item,
    description: descricaoMap[item.product_code] || null,
  }));

  return enrichedData;
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
  return await prisma.hsconsumer_products.create({
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

export const updateConsumerProductsService = async ({
  id,
  product_code,
  auxiliary_code,
  branch_id,
  quantity,
  group_id,
}: UpdateConsumerProducts) => {
  return await prisma.hsconsumer_products.updateMany({
    data: {
      product_code,
      auxiliary_code,
      branch_id,
      quantity,
      group_id,
    },
    where: {
      id: {
        in: id,
      },
    },
  });
};

export const deleteConsumerProductsService = async (id: number) => {
  return await prisma.hsconsumer_products.delete({
    where: { id },
  });
};

export const existingConsumerProducts = async (ids: number[]) => {
  const consumerProducts = await prisma.hsconsumer_products.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    select: {
      id: true,
    },
  });

  const existingIds = consumerProducts.map((item) => item.id);

  const missingIds = ids.filter((id) => !existingIds.includes(id));

  if (missingIds.length > 0) {
    return false;
  } else {
    return true;
  }
};
