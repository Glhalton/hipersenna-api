import z from "zod";

export const getDispatchRecordSchema = z.object({
  id: z.coerce.number().optional().describe("Dispatch record id"),
  branch_id: z.coerce.number().optional().describe("Branch id"),
  nfe_number: z.string().optional().describe("'Nota fiscal' number"),
  seal_number: z.string().optional().describe("Seal number"),
  bonus_number: z.string().optional().describe("Bonus number"),
  license_plate: z.string().optional().describe("Vehicle license plate"),
});

export type GetDispatchRecord = z.infer<typeof getDispatchRecordSchema>;

export const createDispatchRecordSchema = z.object({
  branch_id: z.coerce.number().describe("Vehicle license plate"),
  nfe_number: z.string().describe("'Nota fiscal' number"),
  seal_number: z.string().describe("Seal number"),
  bonus_number: z.string().describe("Bonus number"),
  license_plate: z.string().describe("Vehicle license plate"),
});

export type CreateDispatchRecord = z.infer<typeof createDispatchRecordSchema>;

export const updateDispatchRecordSchema = z.object({
  branch_id: z.coerce.number().optional().describe("Vehicle license plate"),
  nfe_number: z.string().optional().describe("'Nota fiscal' number"),
  seal_number: z.string().optional().describe("Seal number"),
  bonus_number: z.string().optional().describe("Bonus number"),
  license_plate: z.string().optional().describe("Vehicle license plate"),
});

export type UpdateDispatchRecord = z.infer<typeof updateDispatchRecordSchema>;

export const dispatchRecordIdSchema = z.object({
  id: z.coerce.number().describe("Dispatch record id"),
});

export type DispatchRecordId = z.infer<typeof dispatchRecordIdSchema>;

export const dispatchRecordResponseSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  nfe_number: z.string(),
  seal_number: z.string(),
  bonus_number: z.string(),
  license_plate: z.string(),
  created_by_employee_id: z.number(),
  created_at: z.date(),
  modified_at: z.date(),
});
