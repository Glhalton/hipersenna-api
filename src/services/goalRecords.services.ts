import { BadRequest } from "../errors/badRequest.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateGoalRecords,
  GetGoalRecords,
  UpdateGoalRecords,
} from "../schemas/goalRecords.schemas.js";
import { startOfMonth, endOfMonth, addMonths } from "date-fns";

export const createGoalRecordsService = async ({
  branch_id,
  department,
  type,
  goal_value,
  goal_month,
}: CreateGoalRecords) => {
  try {
    const existingGoal = await prisma.hsgoal_records.findFirst({
      where: {
        branch_id,
        department,
        type,
        goal_month,
      },
    });

    if (existingGoal) {
      throw new BadRequest(
        "Já existe uma meta cadastrada para este mês, filial e departamento.",
      );
    }

    return await prisma.hsgoal_records.create({
      data: {
        branch_id,
        department,
        type,
        goal_value,
        goal_month,
      },
    });
  } catch (error: any) {
    throw error;
  }
};

export const getGoalRecordsService = async ({
  department,
  branch_id,
  type,
  goal_month,
}: GetGoalRecords) => {
  const whereClause: any = {};

  const departmentId = await prisma.hsdepartments.findFirst({
    where: { winthor_id: department },
  });

  if (department) whereClause.department = departmentId?.id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (type) whereClause.type = type;
  if (goal_month) {
    const start = startOfMonth(goal_month);
    const end = addMonths(start, 1);

    whereClause.goal_month = {
      gte: start,
      lt: end,
    };
  }

  const data = await prisma.hsgoal_records.findMany({
    where: whereClause,
  });
  return data;
};

export const updateGoalRecordsService = async (
  { department, branch_id, type, goal_month, goal_value }: UpdateGoalRecords,
  id: number,
) => {
  try {
    return await prisma.hsgoal_records.update({
      where: { id },
      data: {
        department,
        branch_id,
        type,
        goal_month,
        goal_value,
      },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new NotFound("Registro de meta não encontrado!");
    }
    throw error;
  }
};

export const deleteGoalRecordsService = async (id: number) => {
  try {
    return await prisma.hsgoal_records.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new NotFound("Registro de meta não encontrado!");
    }
    throw error;
  }
};
