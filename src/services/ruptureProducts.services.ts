import { NotFound } from "../errors/notFound.error.js";
import { getOracleConnection } from "../lib/oracleClient.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateRuptureProducts,
  GetRuptureProducts,
  UpdateRuptureProducts,
} from "../schemas/ruptureProducts.schemas.js";
import oracledb from "oracledb";
import { getDateRange } from "./date.services.js";

export const getRuptureProductsService = async ({
  branchId,
  auxiliaryCode,
  productCode,
  orderBy,
  cursor,
  limit,
  initialDate,
  finalDate,
}: GetRuptureProducts) => {
  let connection;
  try {
    const whereClause: any = {};

    if (branchId) whereClause.branch_id = branchId;
    if (auxiliaryCode) whereClause.auxiliary_code = auxiliaryCode;
    if (productCode) whereClause.product_code = productCode;

    if (initialDate && finalDate) {
      const { startUTC, endUTC } = getDateRange(initialDate, finalDate);
      whereClause.created_at = {
        gte: startUTC,
        lte: endUTC,
      };
    }

    const ruptures = await prisma.hsrupture_products.findMany({
      where: whereClause,
      take: limit,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: "desc",
      },
      include: {
        employees: {
          select: {
            name: true,
            winthor_id: true,
          },
        },
      },
    });

    if (ruptures.length === 0) {
      return {
        data: [],
        nextCursor: null,
      };
    }

    connection = await getOracleConnection();

    const allCodes = ruptures.map((p) => p.product_code);

    const query = `
        SELECT codprod, descricao
        FROM pcprodut
        WHERE codprod IN (${allCodes.map(() => ":code").join(",")})
    `;

    const result = await connection.execute(query, allCodes, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    const descricaoMap: Record<string, string> = {};
    (result.rows || []).forEach((row: any) => {
      descricaoMap[row.CODPROD] = row.DESCRICAO;
    });

    const enrichedProducts = ruptures.map((p) => ({
      ...p,
      description: descricaoMap[p.product_code] || null,
    }));

    const lastItem = enrichedProducts[enrichedProducts.length - 1];

    return {
      data: enrichedProducts,
      nextCursor: enrichedProducts.length === limit ? lastItem.id : null,
    };
  } finally {
    if (connection) await connection.close();
  }
};

export const createRuptureProductsService = async (
  { branchId, productCode, auxiliaryCode }: CreateRuptureProducts,
  employeeId: number,
) => {
  return await prisma.hsrupture_products.create({
    data: {
      branch_id: branchId,
      product_code: productCode,
      auxiliary_code: auxiliaryCode,
      created_by_employee_id: employeeId,
    },
  });
};

export const updateRuptureProductsService = async (
  { branchId, productCode, auxiliaryCode }: UpdateRuptureProducts,
  id: number,
) => {
  try {
    return await prisma.hsrupture_products.update({
      where: { id },
      data: {
        branch_id: branchId,
        product_code: productCode,
        auxiliary_code: auxiliaryCode,
      },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new NotFound("Produto de ruptura não encontrado!");
    }
    throw error;
  }
};

export const deleteRuptureProductsService = async (id: number) => {
  try {
    return await prisma.hsrupture_products.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new NotFound("Produto de ruptura não encontrado!");
    }
    throw error;
  }
};
