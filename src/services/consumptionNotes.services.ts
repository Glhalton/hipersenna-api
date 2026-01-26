import { NotFound } from "../errors/notFound.error.js";
import { getOracleConnection } from "../lib/oracleClient.js";
import fs from "fs";
import path from "path";
import { prisma } from "../lib/prisma.js";
import {
  CreateConsumptionNotes,
  GetConsumptionNotes,
  UpdateConsumptionNotes,
} from "../schemas/consumptionNotes.schemas.js";
import oracledb from "oracledb";

export const getConsumptionNotesDetailedService = async (id: number) => {
  let connection;

  try {
    const note = await prisma.hsconsumption_notes.findUnique({
      where: { id },
      include: {
        hsconsumptionProducts: {},
        hsconsumption_groups: { select: { description: true } },
      },
    });

    if (!note) throw new NotFound("Registro de consumo não encontrado!");

    const allCodes = note.hsconsumptionProducts.map((p) => p.product_code);

    let enrichedProducts = [...note.hsconsumptionProducts];

    if (allCodes.length > 0) {
      connection = await getOracleConnection();

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

      enrichedProducts = note.hsconsumptionProducts.map((prod) => ({
        ...prod,
        description: descricaoMap[prod.product_code] || null,
      }));
    }

    return {
      ...note,
      hsconsumptionProducts: enrichedProducts,
      signature: note.signature ? getSignature(note.signature) : null,
    };
  } catch (error: any) {
    throw error;
  } finally {
    if (connection) await connection.close();
  }
};

export const getConsumptionNotesService = async ({
  id,
  employee_id,
}: GetConsumptionNotes) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (employee_id) whereClause.employee_id = employee_id;

  return await prisma.hsconsumption_notes.findMany({
    where: whereClause,
    include: {
      hsconsumption_groups: { select: { description: true } },
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

export const createConsumptionNotesService = async (
  noteData: CreateConsumptionNotes,
  employee_id: number,
) => {
  let fileName;

  if (noteData.signature) {
    const result = await saveSignature(noteData.signature);
    fileName = result.filename;
  } else {
    fileName = null;
  }

  return await prisma.hsconsumption_notes.create({
    data: {
      created_by_employee_id: employee_id,
      branch_id: noteData.branch_id,
      group_id: noteData.group_id,
      signature: fileName,
      hsconsumptionProducts: {
        create: noteData.products.map((p) => ({
          auxiliary_code: p.auxiliary_code,
          product_code: p.product_code,
          quantity: Number(p.quantity),
        })),
      },
    },
    include: {
      hsconsumptionProducts: true,
    },
  });
};

export const updateConsumptionNotesService = async (
  { nfe_number }: UpdateConsumptionNotes,
  id: number,
) => {
  try {
    return await prisma.hsconsumption_notes.update({
      where: { id },
      data: { nfe_number },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Nota de consumo não encontrada!");
    }
    throw error;
  }
};

export const deleteConsumptionNotesService = async (id: number) => {
  try {
    return await prisma.hsconsumption_notes.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Nota de consumo não encontrada!");
    }
    throw error;
  }
};

const saveSignature = async (signature: string) => {
  const uploadDir = path.resolve(process.cwd(), "signatures");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filename = `signature_${Date.now()}_${Math.random()
    .toString(36)
    .substring(2, 8)}.png`;

  const filePath = path.join(uploadDir, filename);

  const base64Data = signature.replace(/^data:image\/png;base64,/, "");

  fs.writeFileSync(filePath, base64Data, "base64");

  return {
    filename,
  };
};

const getSignature = (filename: string) => {
  const filePath = path.resolve(process.cwd(), "signatures", filename);

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath);
  return `data:image/png;base64,${file.toString("base64")}`;
};
