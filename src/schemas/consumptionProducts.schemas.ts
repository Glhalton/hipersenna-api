import z from "zod";

export const createconsumptionProductsSchema = z.object({
  branch_id: z.coerce.number(),
  product_code: z.coerce.number(),
  auxiliary_code: z.string(),
  quantity: z.coerce.number(),
  group_id: z.coerce.number(),
});

export type CreateconsumptionProducts = z.infer<typeof createconsumptionProductsSchema>;

export const getconsumptionProductsSchema = z.object({
  id: z.coerce.number().optional(),
  employee_id: z.coerce.number().optional(),
  branch_id: z.coerce.number().optional(),
  product_code: z.coerce.number().optional(),
  auxiliary_code: z.string().optional(),
  group_id: z.coerce.number().optional(),
  consumption_id: z.coerce.number().optional().nullable()
});

export type GetconsumptionProducts = z.infer<typeof getconsumptionProductsSchema>;

export const updateconsumptionProductsSchema = z.object({
  id: z.coerce.number().array(),
  branch_id: z.number().optional(),
  product_code: z.number().optional(),
  auxiliary_code: z.string().optional(),
  quantity: z.number().optional(),
  group_id: z.number().optional(),
});

export type UpdateconsumptionProducts = z.infer<typeof updateconsumptionProductsSchema>

export const consumptionProductsId = z.object({
  id: z.coerce.number(),
})

export const consumptionProductsResponse = z.object({
  id: z.number(),
  description: z.string().optional(),
  consumption_id: z.number().nullable(),
  created_by_employee_id: z.number(),
  branch_id:  z.number(),
  product_code: z.number(),
  auxiliary_code:z.string(),
  quantity: z.number(),
  group_id: z.number(),
  created_at: z.date(),
  modified_at:z.date(),
})


