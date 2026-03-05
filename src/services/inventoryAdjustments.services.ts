import { NotFound } from "../errors/notFound.error.js";
import { getOracleConnection } from "../lib/oracleClient.js";
import { prisma } from "../lib/prisma.js";
import oracledb from "oracledb";
import {
  CreateInventoryAdjustment,
  GetInventoryAdjustments,
  updateInventoryAdjustmentSchema,
  UpdateInventoryAdjustment,
} from "../schemas/inventoryAdjustments.schemas.js";
import { getDateRange } from "./date.services.js";
import { Unauthorized } from "../errors/unauthorized.error.js";

type OracleProductRow = {
  CODEPTO: string;
  CODPROD: string;
  DESCRICAO: string;
  CODFILIAL: number;
  DTULTENT: Date;
  DTULTFAT: Date;
};

export const getInventoryAdjustmentsService = async (
  {
    branch_id,
    product_code,
    auxiliary_code,
    orderBy,
    cursor,
    limit,
    initial_date,
    final_date,
  }: GetInventoryAdjustments,
  permittedBranches: number[],
) => {
  const connection = await getOracleConnection();
  try {
    const whereClause: any = {};
    if (branch_id) {
      if (!permittedBranches.includes(branch_id)) {
        throw new Unauthorized(
          "O usuário não possui acesso a filial informada",
        );
      }
      whereClause.branch_id = branch_id;
    } else {
      whereClause.branch_id = { in: permittedBranches };
    }
    if (auxiliary_code) whereClause.auxiliary_code = auxiliary_code;
    if (product_code) whereClause.product_code = product_code;
    if (initial_date && final_date) {
      const { startUTC, endUTC } = getDateRange(initial_date, final_date);
      whereClause.created_at = {
        gte: startUTC,
        lte: endUTC,
      };
    }

    const inventoryAdjustments = await prisma.hsinventory_adjustments.findMany({
      where: whereClause,
      take: limit,
      skip: cursor ? 1 : 0,
      cursor: cursor ? { id: cursor } : undefined,
      orderBy: {
        id: "desc",
      },
      select: {
        id: true,
        created_by_employee_id: true,
        status_changed_by_employee_id: true,
        branch_id: true,
        product_code: true,
        auxiliary_code: true,
        quantity: true,
        status: true,
        created_at: true,
        modified_at: true,
        created_by_employee: {
          select: {
            name: true,
            winthor_id: true,
          },
        },
        status_changed_by_employee: {
          select: { name: true, winthor_id: true },
        },
      },
    });

    if (inventoryAdjustments.length === 0) {
      return {
        data: [],
        nextCursor: null,
      };
    }

    const allCodes = inventoryAdjustments.map((p) => p.product_code);
    const allBranches = inventoryAdjustments.map((p) => p.branch_id);

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

    const enrichedProducts = inventoryAdjustments.map((p) => {
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
      nextCursor: inventoryAdjustments.length === limit ? lastItem.id : null,
    };
  } finally {
    await connection.close();
  }
};

export const getDetailedInventoryAdjustmentsService = async (
  id: number,
  permittedBranches: number[],
) => {
  const connection = await getOracleConnection();
  try {
    const inventoryAdjustments =
      await prisma.hsinventory_adjustments.findUnique({
        where: { id, branch_id: { in: permittedBranches } },
        select: {
          id: true,
          created_by_employee_id: true,
          status_changed_by_employee_id: true,
          branch_id: true,
          product_code: true,
          auxiliary_code: true,
          quantity: true,
          status: true,
          created_at: true,
          modified_at: true,
          created_by_employee: {
            select: {
              name: true,
              winthor_id: true,
            },
          },
          status_changed_by_employee: {
            select: { name: true, winthor_id: true },
          },
        },
      });

    if (!inventoryAdjustments) {
      throw new NotFound(
        "Solicitação de ajuste de estoque não encontrada ou acesso negado à filial",
      );
    }

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
            WHERE p.codprod = :productCode
              AND es.codfilial = :branchId
        `;

    const binds = {
      productCode: inventoryAdjustments.product_code,
      branchId: inventoryAdjustments.branch_id,
    };

    const result = await connection.execute<OracleProductRow>(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    if (!result.rows || result.rows.length === 0) {
      throw new Error("Produto não encontrado no Oracle");
    }

    const row = result.rows[0];

    const enrichedProduct = {
      ...inventoryAdjustments,
      description: row?.DESCRICAO || null,
      department: row?.CODEPTO || null,
      lastEntryDate: row?.DTULTENT || null,
      lastExitDate: row?.DTULTFAT || null,
    };

    return enrichedProduct;
  } finally {
    await connection.close();
  }
};

export const createInventoryAdjustmentService = async (
  {
    branch_id,
    product_code,
    auxiliary_code,
    quantity,
  }: CreateInventoryAdjustment,
  userId: number,
  permittedBranches: number[],
) => {
  if (!permittedBranches.includes(branch_id)) {
    throw new Unauthorized("O usuário não possui acesso a filial informada");
  }
  return await prisma.hsinventory_adjustments.create({
    data: {
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
      created_by_employee_id: userId,
    },
  });
};

export const updateInventoryAdjustmentService = async (
  {
    branch_id,
    product_code,
    auxiliary_code,
    quantity,
    status,
  }: UpdateInventoryAdjustment,
  itemId: number,
  userId: number,
  permittedBranches: number[],
) => {
  const existing = await prisma.hsinventory_adjustments.findFirst({
    where: {
      id: itemId,
      branch_id: { in: permittedBranches },
    },
  });

  if (!existing) {
    throw new NotFound(
      "Solicitação de ajuste de estoque não encontrada ou acesso negado à filial",
    );
  }

  const statusChanged = status && status !== existing.status;

  return await prisma.hsinventory_adjustments.update({
    where: { id: itemId },
    data: {
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
      status,
      ...(statusChanged && {
        status_changed_by_employee_id: userId,
      }),
    },
  });
};
