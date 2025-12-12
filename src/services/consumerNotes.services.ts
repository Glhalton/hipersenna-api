import { prisma } from "../lib/prisma.js";
import {
  CreateConsumerNotes,
  GetConsumerNotes,
} from "../schemas/consumerNotes.schemas.js";

export const getConsumerNotesService = async ({
  id,
  employee_id,
}: GetConsumerNotes) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (employee_id) whereClause.employee_id = employee_id;

  return await prisma.hsconsumer_notes.findMany({
    where: whereClause,
  });
};

export const createConsumerNotesService = async (
  { id }: CreateConsumerNotes,
  employee_id: number
) => {
  const result = await prisma.$transaction(async (tx) => {
    const note = await tx.hsconsumer_notes.create({
      data: { employee_id },
    });

    const updatedProducts = await tx.hsconsumer_products.updateMany({
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

export const updateConsumerNotesService = async (data: any, id: number) => {
  return await prisma.hsconsumer_notes.update({
    where: { id },
    data: {
      data,
    },
  });
};

export const deleteConsumerNotesService = async (id: number) => {
  return await prisma.hsconsumer_notes.delete({
    where: { id },
  });
};
