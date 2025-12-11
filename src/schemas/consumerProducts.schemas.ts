import z from "zod";

export const createConsumerProductsSchema = z.object({
  branch_id: z.coerce.number(),
  product_code: z.coerce.number(),
  auxiliary_code: z.string(),
  quantity: z.coerce.number(),
  group_id: z.coerce.number(),
});

export type CreateConsumerProducts = z.infer<typeof createConsumerProductsSchema>;

export const getConsumerProductsSchema = z.object({
  id: z.coerce.number().optional(),
  employee_id: z.coerce.number().optional(),
  branch_id: z.coerce.number().optional(),
  product_code: z.coerce.number().optional(),
  auxiliary_code: z.string().optional(),
  group_id: z.coerce.number().optional(),
});

export type GetConsumerProducts = z.infer<typeof getConsumerProductsSchema>;

export const updateConsumerProductsSchema = z.object({
  branch_id: z.number().optional(),
  product_code: z.number().optional(),
  auxiliary_code: z.string().optional(),
  quantity: z.number().optional(),
  group_id: z.number().optional(),
});

export type UpdateConsumerProducts = z.infer<typeof updateConsumerProductsSchema>

export const consumerProductsId = z.object({
  id: z.coerce.number(),
})

export const consumerProductsResponse = z.object({
  id: z.number(),
  consumption_id: z.number().nullable(),
  employee_id: z.number(),
  branch_id:  z.number(),
  product_code: z.number(),
  auxiliary_code:z.string(),
  quantity: z.number(),
  group_id: z.number(),
  created_at: z.date(),
  modified_at:z.date(),
})
