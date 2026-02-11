import z from "zod";

export const getDamageReportSchema = z.object({
  branchId: z.coerce.number().optional(),
  departmentId: z.coerce.number().optional(),
  monthYear: z.coerce.date(),
});

export type GetDamageReport = z.infer<typeof getDamageReportSchema>;

export const damageReportResponseSchema = z.object({
  branchId: z.number(),
  departmentId: z.number(),
  totalValue: z.number(),
  goalValue: z.number().nullable(),
  departmentName: z.string(),
});

export const getSalesReportSchema = z.object({
  branchId: z.coerce.number().optional(),
  departmentId: z.coerce.number().optional(),
  monthYear: z.coerce.date(),
});

export type GetSalesReport = z.infer<typeof getSalesReportSchema>;

export const salesReportResponseSchema = z.object({
  branchId: z.string(),
  departmentId: z.number(),
  totalValue: z.number(),
  goalValue: z.number().nullable(),
  departmentName: z.string(),
});
