import { prisma } from "../lib/prisma.js";
import {
  CreateconsumptionNotes,
  GetconsumptionNotes,
} from "../schemas/consumptionNotes.schemas.js";

export const getconsumptionNotesService = async ({
  id,
  employee_id,
}: GetconsumptionNotes) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (employee_id) whereClause.employee_id = employee_id;

  return await prisma.hsconsumption_notes.findMany({
    where: whereClause,
    include: {
      hsconsumptionProducts: true,
    },
  });
};

export const createconsumptionNotesService = async (
  { id }: CreateconsumptionNotes,
  employee_id: number
) => {
  const result = await prisma.$transaction(async (tx) => {
    const note = await tx.hsconsumption_notes.create({
      data: { generated_by_employee_id: employee_id },
    });

    const updatedProducts = await tx.hsconsumption_products.updateMany({
      where: {
        id: { in: id },
        consumption_id: null,
      },
      data: {
        consumption_id: note.id,
      },
    });

    if (updatedProducts.count !== id.length) {
      throw new Error("Algum produto já estão vinculado a outra nota");
    }
    return note;
  });

  return result;
};

export const updateconsumptionNotesService = async (data: any, id: number) => {
  return await prisma.hsconsumption_notes.update({
    where: { id },
    data: {
      data,
    },
  });
};

export const deleteconsumptionNotesService = async (id: number) => {
  return await prisma.hsconsumption_notes.delete({
    where: { id },
  });
};
