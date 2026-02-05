import z from "zod";

export const employeeId = z.object({
  id: z.coerce.number(),
});

export const employeeBranchesSchema = z.object({
  employee_id: z.coerce.number(),
  branch_id: z.coerce.number().array(),
});

export type EmployeeBranches = z.infer<typeof employeeBranchesSchema>;

export const employeeBranchesResponseSchema = z.object({
  employee_id: z.number(),
  branch_id: z.number(),
  created_at: z.date(),
  branch: z.object({
    id: z.number(),
    description: z.string(),
  }),
});
