import z from "zod";

export const departmentId = z.object({
  id: z.number(),
});

export const getDepartmentSchema = z.object({
  id: z.number().optional(),
  winthor_id: z.number().optional(),
  description: z.number().optional(),
});

export type GetDepartment = z.infer<typeof getDepartmentSchema>;

export const createDepartmentSchema = z.object({
  winthor_id: z.number(),
  description: z.string(),
});

export type CreateDepartment = z.infer<typeof createDepartmentSchema>;

export const updateDepartmentSchema = z.object({
  winthor_id: z.number().optional(),
  description: z.string().optional(),
});

export type UpdateDepartment = z.infer<typeof updateDepartmentSchema>;

export const departmentResponseSchema = z.object({
  id: z.number(),
  winthor_id: z.number(),
  description: z.string(),
});
