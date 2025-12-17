import { getOracleConnection } from "../lib/oracleClient.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateConsumptionNotes,
  GetConsumptionNotes,
  UpdateConsumptionNotes,
} from "../schemas/consumptionNotes.schemas.js";
import oracledb from "oracledb";

export const getConsumptionNotesService = async ({
  id,
  employee_id,
}: GetConsumptionNotes) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (employee_id) whereClause.employee_id = employee_id;

  const postgresData = await prisma.hsconsumption_notes.findMany({
    where: whereClause,
    include: {
      hsconsumptionProducts: {
        include: {
          hsconsumption_groups: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const allCodes = postgresData.flatMap((p) =>
    p.hsconsumptionProducts.map((prod) => prod.product_code)
  );

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
    hsconsumptionProducts: item.hsconsumptionProducts.map((prod) => ({
      ...prod,
      description: descricaoMap[prod.product_code] || null,
    })),
  }));

  return enrichedData;
};

export const createConsumptionNotesService = async (
  { id }: CreateConsumptionNotes,
  employee_id: number
) => {
  const result = await prisma.$transaction(async (tx) => {
    const products = await tx.hsconsumption_products.findMany({
      where: {
        id: { in: id },
        consumption_id: null,
      },
      select: {
        id: true,
        branch_id: true,
        group_id: true,
      },
    });

    if (products.length !== id.length) {
      throw new Error("Algum produto já estão vinculado a outra nota!");
    }

    const branchIds = new Set(products.map((p) => p.branch_id));

    if (branchIds.size > 1) {
      throw new Error(
        "Não é permitido criar nota com produtos de filiais diferentes!"
      );
    }

    const groupIds = new Set(products.map((p) => p.group_id));

    if (groupIds.size > 1) {
      throw new Error(
        "Não é permitido criar nota com produtos de grupos de consumo diferentes!"
      );
    }

    const note = await tx.hsconsumption_notes.create({
      data: { generated_by_employee_id: employee_id },
    });

    const updatedProducts = await tx.hsconsumption_products.updateMany({
      where: {
        id: { in: id },
      },
      data: {
        consumption_id: note.id,
      },
    });

    return note;
  });

  return result;
};

export const updateConsumptionNotesService = async (
  { nfe_number }: UpdateConsumptionNotes,
  id: number
) => {
  return await prisma.hsconsumption_notes.update({
    where: { id },
    data: {
      nfe_number,
    },
  });
};

export const deleteConsumptionNotesService = async (id: number) => {
  return await prisma.hsconsumption_notes.delete({
    where: { id },
  });
};
