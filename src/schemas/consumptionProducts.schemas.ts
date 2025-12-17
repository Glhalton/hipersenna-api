import z from "zod";

export const createConsumptionProductsSchema = z.object({
  branch_id: z.coerce.number(),
  product_code: z.coerce.number(),
  auxiliary_code: z.string(),
  quantity: z.coerce.number(),
  group_id: z.coerce.number(),
});

export type CreateConsumptionProducts = z.infer<
  typeof createConsumptionProductsSchema
>;

export const getConsumptionProductsSchema = z.object({
  id: z.coerce.number().optional(),
  employee_id: z.coerce.number().optional(),
  branch_id: z.coerce.number().optional(),
  product_code: z.coerce.number().optional(),
  auxiliary_code: z.string().optional(),
  group_id: z.coerce.number().optional(),
  consumption_id: z.coerce.number().optional().nullable(),
});

export type GetConsumptionProducts = z.infer<
  typeof getConsumptionProductsSchema
>;

export const updateConsumptionProductsSchema = z.object({
  id: z.coerce.number().array(),
  branch_id: z.coerce.number().optional(),
  product_code: z.coerce.number().optional(),
  auxiliary_code: z.string().optional(),
  quantity: z.coerce.number().optional(),
  group_id: z.coerce.number().optional(),
});

export type UpdateconsumptionProducts = z.infer<
  typeof updateConsumptionProductsSchema
>;

export const consumptionProductsId = z.object({
  id: z.coerce.number(),
});

export const consumptionProductsResponse = z.object({
  id: z.number(),
  description: z.string().optional(),
  consumption_id: z.number().nullable(),
  created_by_employee_id: z.number(),
  branch_id: z.number(),
  product_code: z.number(),
  auxiliary_code: z.string(),
  quantity: z.number(),
  group_id: z.number(),
  created_at: z.date(),
  modified_at: z.date(),
  hsconsumption_groups: z.object({
    id: z.number(),
    description: z.string(),
    created_at: z.date(),
    modified_at: z.date(),
  }).optional(),
});
