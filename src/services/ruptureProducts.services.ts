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
import { Unauthorized } from "../errors/unauthorized.error.js";

export const getRuptureProductsService = async (
  {
    branchId,
    auxiliaryCode,
    productCode,
    orderBy,
    cursor,
    limit,
    initialDate,
    finalDate,
  }: GetRuptureProducts,
  permittedBranches: number[],
) => {
  let connection;
  try {
    const whereClause: any = {};

    if (branchId) {
      if (!permittedBranches.includes(branchId)) {
        throw new Unauthorized(
          "O usuário não possui acesso a filial informada",
        );
      }
      whereClause.branch_id = branchId;
    } else {
      whereClause.branch_id = { in: permittedBranches };
    }

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
    const allBranches = ruptures.map((p) => p.branch_id);

    const codeBinds = allCodes.map((_, i) => `:code${i}`).join(",");
    const branchBinds = allBranches.map((_, i) => `:branch${i}`).join(",");

    const query = `
        SELECT 
          p.codepto,
          p.codprod, 
          p.descricao,
          es.codfilial,
          es.dtultent,
          es.dtultfat
        FROM pcprodut p    
        JOIN pcest es
          ON es.codprod = p.codprod
        WHERE p.codprod IN (${codeBinds})
          AND es.codfilial IN (${branchBinds})
    `;

    const binds = {
      ...Object.fromEntries(allCodes.map((c, i) => [`code${i}`, c])),
      ...Object.fromEntries(allBranches.map((b, i) => [`branch${i}`, b])),
    };

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    const map: Record<string, any> = {};

    (result.rows || []).forEach((row: any) => {
      const key = `${row.CODPROD}_${row.CODFILIAL}`;

      map[key] = {
        description: row.DESCRICAO,
        department: row.CODEPTO,
        lastEntryDate: row.DTULTENT,
        lastExitDate: row.DTULTFAT,
      };
    });

    const enrichedProducts = ruptures.map((p) => {
      const key = `${p.product_code}_${p.branch_id}`;

      return {
        ...p,
        description: map[key]?.description || null,
        department: map[key]?.department || null,
        lastEntryDate: map[key]?.lastEntryDate || null,
        lastExitDate: map[key]?.lastExitDate || null,
      };
    });

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
  permittedBranches: number[],
) => {
  if (!permittedBranches.includes(branchId)) {
    throw new Unauthorized("O usuário não possui acesso a filial informada");
  }
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
  permittedBranches: number[],
) => {
  const existing = await prisma.hsrupture_products.findFirst({
    where: {
      id,
      branch_id: { in: permittedBranches },
    },
  });

  if (!existing) {
    throw new NotFound(
      "Produto de ruptura não encontrado ou acesso negado à filial",
    );
  }

  return await prisma.hsrupture_products.update({
    where: { id },
    data: {
      branch_id: branchId,
      product_code: productCode,
      auxiliary_code: auxiliaryCode,
    },
  });
};

export const deleteRuptureProductsService = async (
  id: number,
  permittedBranches: number[],
) => {
  const existing = await prisma.hsrupture_products.findFirst({
    where: {
      id,
      branch_id: { in: permittedBranches },
    },
  });

  if (!existing) {
    throw new NotFound(
      "Produto de ruptura não encontrado ou acesso negado à filial",
    );
  }

  return await prisma.hsrupture_products.delete({
    where: { id },
  });
};
