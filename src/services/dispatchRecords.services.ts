import { BadRequest } from "../errors/badRequest.error.js";
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
  employee_id,
}: GetDispatchRecord) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (nfe_number) whereClause.nfe_number = nfe_number;
  if (seal_number) whereClause.seal_number = seal_number;
  if (bonus_number) whereClause.bonus_number = bonus_number;
  if (license_plate) whereClause.license_plate = license_plate;
  if (employee_id) whereClause.created_by_employee_id = employee_id;

  return await prisma.hsdispatch_records.findMany({
    where: whereClause,
    include: { employee: { select: { name: true } } },
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

  const plateCarValidity = isValidCarPlate(license_plate);

  if(!plateCarValidity){
    throw new BadRequest("A Placa de veículo informada é inválida!")
  }

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

function isValidCarPlate(plate: string): boolean {
  if (!plate) return false;

  const normalized = plate.toUpperCase().replace(/[^A-Z0-9]/g, "");

  const oldPattern = /^[A-Z]{3}[0-9]{4}$/; // ABC1234
  const mercosulPattern = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/; // ABC1D23

  return oldPattern.test(normalized) || mercosulPattern.test(normalized);
}
