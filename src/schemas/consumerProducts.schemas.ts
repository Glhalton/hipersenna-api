import z from "zod";

export const consumerProductsSchema = z.object({
  branch_id: z.number(),
  product_code: z.number(),
  auxiliary_code: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  group_id: z.number(),
});

export type ConsumerProducts = z.infer<typeof consumerProductsSchema>;

export const getConsumerProductsSchema = z.object({
  id: z.number().optional(),
  employee_id: z.number().optional(),
  branch_id: z.number().optional(),
  product_code: z.number().optional(),
  auxiliary_code: z.string().optional(),
  group_id: z.number().optional(),
});

export type GetConsumerProducts = z.infer<typeof getConsumerProductsSchema>;

export const updateConsumerProductsSchema = z.object({});
