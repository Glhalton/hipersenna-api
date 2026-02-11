import z from "zod";
import { departmentId } from "./departments.schemas.js";

export const goalRecordIdSchema = z.object({
  id: z.number(),
});

export const getGoalRecordsSchema = z.object({
  department: z.number().optional(),
  branch_id: z.number().optional(),
  type: z.any().optional(),
  goal_month: z.date().optional(),
});

export type GetGoalRecords = z.infer<typeof getGoalRecordsSchema>;

export const createGoalRecordsSchema = z.object({
  department: z.number(),
  branch_id: z.number(),
  type: z.any(),
  goal_value: z.number(),
  goal_month: z.coerce.date(),
});

export type CreateGoalRecords = z.infer<typeof createGoalRecordsSchema>;

export const updateGoalRecordsSchema = z.object({
  department: z.number().optional(),
  branch_id: z.number().optional(),
  type: z.any().optional(),
  goal_value: z.number().optional(),
  goal_month: z.date().optional(),
});

export type UpdateGoalRecords = z.infer<typeof updateGoalRecordsSchema>;

export const goalRecordsResponseSchema = z.object({
  id: z.number(),
  department: z.number(),
  branch_id: z.number(),
  type: z.string(),
  goal_value: z.number(),
  goal_month: z.coerce.date(),
  created_at: z.coerce.date(),
  modified_at: z.date(),
});
