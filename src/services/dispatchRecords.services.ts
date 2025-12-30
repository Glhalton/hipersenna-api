import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateDispatchRecord,
  DispatchRecordId,
  GetDispatchRecord,
  UpdateDispatchRecord,
} from "../schemas/dispatchRecords.schemas.js";

export const getDispatchRecordService = async ({
  id,
  branch_id,
  nfe_number,
  seal_number,
  bonus_number,
  license_plate,
}: GetDispatchRecord) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (nfe_number) whereClause.nfe_number = nfe_number;
  if (seal_number) whereClause.seal_number = seal_number;
  if (bonus_number) whereClause.bonus_number = license_plate;

  return await prisma.hsdispatch_records.findMany({
    where: whereClause,
  });
};

export const createDispatchRecordService = async (
  {
    branch_id,
    bonus_number,
    nfe_number,
    seal_number,
    license_plate,
  }: CreateDispatchRecord,
  employeeId: number
) => {
  return await prisma.hsdispatch_records.create({
    data: {
      branch_id,
      bonus_number,
      nfe_number,
      seal_number,
      license_plate,
      created_by_employee_id: employeeId,
    },
  });
};

export const updateDispatchRecordService = async (
  {
    bonus_number,
    branch_id,
    license_plate,
    nfe_number,
    seal_number,
  }: UpdateDispatchRecord,
  { id }: DispatchRecordId
) => {
  try {
    return await prisma.hsdispatch_records.update({
      where: { id },
      data: {
        bonus_number,
        branch_id,
        license_plate,
        nfe_number,
        seal_number,
      },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Registro de expedição de mercadoria não encontrada!");
    }
    throw error;
  }
};

export const deleteDispatchRecordService = async ({ id }: DispatchRecordId) => {
  try {
    return await prisma.hsdispatch_records.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Registro de expedição de mercadoria não encontrada!");
    }
    throw error;
  }
};
