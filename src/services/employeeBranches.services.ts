import { Conflict } from "../errors/conflict.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import { EmployeeBranches } from "../schemas/employeeBranches.schemas.js";

export const getEmployeeBranchesService = async (id: number) => {
  return await prisma.hsemployee_branches.findMany({
    where: { employee_id: id },
    select: {
      employee_id: true,
      branch_id: true,
      branch: {
        select: {
          id: true,
          description: true,
        },
      },
    },
  });
};

export const createEmployeeBranchesService = async ({
  employee_id,
  branch_id,
}: EmployeeBranches) => {
  const branches = await getEmployeeBranchesService(employee_id);

  const existingIds = new Set(branches.map((p) => p.branch_id));
  const duplicated = branch_id.filter((bid) => existingIds.has(bid));

  if (duplicated.length > 0) {
    throw new Conflict(
      `O usuário já possui acesso as seguintes filiais: ${duplicated}`,
    );
  }

  const records = branch_id.map((pid) => ({
    branch_id: pid,
    employee_id,
  }));

  try {
    return await prisma.hsemployee_branches.createMany({
      data: records,
      skipDuplicates: true,
    });
  } catch (error: any) {
    if (error.code === "P2003") {
      throw new NotFound("Filial ou usuário não encontrado");
    }
  }
};

export const deleteEmployeeBranchesService = async ({
  employee_id,
  branch_id,
}: EmployeeBranches) => {
  const existing = await prisma.hsemployee_branches.findMany({
    where: {
      employee_id,
      branch_id: { in: branch_id },
    },
  });

  if (existing.length !== branch_id.length) {
    throw new NotFound("O usuário não possui todas as permissões informadas!");
  }

  return await prisma.hsemployee_branches.deleteMany({
    where: {
      employee_id,
      branch_id: { in: branch_id },
    },
  });
};
