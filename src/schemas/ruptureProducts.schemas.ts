import z from "zod";

export const getRuptureProductsSchema = z.object({
  branchId: z.coerce.number().optional(),
  productCode: z.coerce.number().optional(),
  auxiliaryCode: z.string().optional(),
  orderBy: z.enum(["asc", "desc"]).optional(),
  cursor: z.coerce.number().optional().nullable(),
  limit: z.coerce.number().optional(),
  initialDate: z.coerce.date().optional(),
  finalDate: z.coerce.date().optional(),
});

export type GetRuptureProducts = z.infer<typeof getRuptureProductsSchema>;

export const createRuptureProductsSchema = z.object({
  branchId: z.number(),
  productCode: z.number(),
  auxiliaryCode: z.string(),
});

export type CreateRuptureProducts = z.infer<typeof createRuptureProductsSchema>;

export const ruptureProductsIdSchema = z.object({
  id: z.coerce.number(),
});

export const updateRuptureProductsSchema = z.object({
  branchId: z.number().optional(),
  productCode: z.number().optional(),
  auxiliaryCode: z.string().optional(),
});

export type UpdateRuptureProducts = z.infer<typeof updateRuptureProductsSchema>;

export const ruptureProductsResponseSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  created_by_employee_id: z.number(),
  product_code: z.number(),
  auxiliary_code: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
  description: z.string().optional(),
  employees: z
    .object({
      winthor_id: z.number(),
      name: z.string(),
    })
    .optional(),
});

export const getRuptureProductsResponseSchema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      branch_id: z.number(),
      created_by_employee_id: z.number(),
      product_code: z.number(),
      auxiliary_code: z.string(),
      created_at: z.date(),
      modified_at: z.date(),
      description: z.string().optional(),
      department: z.number().optional(),
      lastEntryDate: z.date().optional().nullable(),
      lastExitDate: z.date().optional().nullable(),
      employees: z
        .object({
          winthor_id: z.number(),
          name: z.string(),
        })
        .optional(),
    }),
  ),
  nextCursor: z.number().nullable(),
});
