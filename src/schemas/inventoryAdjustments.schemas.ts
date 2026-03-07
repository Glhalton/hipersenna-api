import z from "zod";

export const getInventoryAdjustmentsSchema = z.object({
  branch_id: z.coerce.number().optional(),
  product_code: z.coerce.number().optional(),
  auxiliary_code: z.string().optional(),
  orderBy: z.enum(["asc", "desc"]).optional(),
  cursor: z.coerce.number().optional(),
  limit: z.coerce.number().optional(),
  initial_date: z.coerce.date().optional(),
  final_date: z.coerce.date().optional(),
  status: z.coerce.string().optional(),
});

export const getInventoryAdjustmentsResponse = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      created_by_employee_id: z.number(),
      status_changed_by_employee_id: z.number().nullable(),
      branch_id: z.number(),
      description: z.string(),
      product_code: z.number(),
      auxiliary_code: z.string(),
      quantity: z.number(),
      status: z.enum(["NEGADO", "PENDENTE", "AJUSTADO"]),
      created_at: z.date(),
      modified_at: z.date(),
      created_by_employee: z.object({
        name: z.string(),
        winthor_id: z.number(),
      }),
      status_changed_by_employee: z
        .object({
          name: z.string(),
          winthor_id: z.number(),
        })
        .nullable(),
    }),
  ),
  nextCursor: z.number().nullable(),
});

export const getDetailedInventoryAdjustmentsResponseSchema = z.object({
  id: z.number(),
  created_by_employee_id: z.number(),
  status_changed_by_employee_id: z.number().nullable(),
  branch_id: z.number(),
  description: z.string(),
  product_code: z.number(),
  auxiliary_code: z.string(),
  quantity: z.number(),
  status: z.enum(["NEGADO", "PENDENTE", "AJUSTADO"]),
  created_at: z.date(),
  modified_at: z.date(),
  created_by_employee: z.object({
    name: z.string(),
    winthor_id: z.number(),
  }),
  status_changed_by_employee: z
    .object({
      name: z.string(),
      winthor_id: z.number(),
    })
    .nullable(),
});

export const createInventoryAdjustmentSchema = z.object({
  branch_id: z.number(),
  product_code: z.number(),
  auxiliary_code: z.string(),
  quantity: z.number(),
});

export const updateInventoryAdjustmentSchema = z.object({
  branch_id: z.number().optional(),
  product_code: z.number().optional(),
  auxiliary_code: z.string().optional(),
  quantity: z.number().optional(),
  status: z.enum(["NEGADO", "PENDENTE", "AJUSTADO"]).optional(),
});

export const inventoryAdjustmentsResponse = z.object({
  id: z.number(),
  created_by_employee_id: z.number(),
  branch_id: z.number(),
  product_code: z.number(),
  auxiliary_code: z.string(),
  status: z.enum(["NEGADO", "PENDENTE", "AJUSTADO"]),
  created_at: z.date(),
  modified_at: z.date(),
});

export const inventoryAdjustmentIdSchema = z.object({
  id: z.coerce.number(),
});

export type GetInventoryAdjustments = z.infer<
  typeof getInventoryAdjustmentsSchema
>;

export type CreateInventoryAdjustment = z.infer<
  typeof createInventoryAdjustmentSchema
>;

export type UpdateInventoryAdjustment = z.infer<
  typeof updateInventoryAdjustmentSchema
>;
