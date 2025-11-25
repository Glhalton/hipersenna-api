import { z } from "zod";

export const validityIdSchema = z.object({
  id: z.coerce.number(),
});

export const getValiditySchema = z.object({
  id: z.coerce.number().optional(),
  created_at: z.coerce.date().optional(),
  branch_id: z.coerce.number().optional(),
  expiresDays: z.coerce.number().optional(),
  initialDate: z.coerce.date().optional(),
  finalDate: z.coerce.date().optional(),
  descricao: z.string().optional(),
});
export type GetValidity = z.infer<typeof getValiditySchema>;

export const createValiditySchema = z.object({
  branch_id: z.number(),
  request_id: z.number().optional().nullable(),
  products: z.array(
    z.object({
      product_code: z.coerce.number(),
      auxiliary_code: z.string(),
      quantity: z.number(),
      validity_date: z.coerce.date(),
    })
  ),
});
export type CreateValidity = z.infer<typeof createValiditySchema>;

export const updateValiditySchema = z.array(
  z.object({
    validity_id: z.number().int().positive(),
    products: z.array(
      z.object({
        product_id: z.number().int().positive(),
        treat_id: z.number().int().positive(),
      })
    ),
  })
);
export type UpdateValidity = z.infer<typeof updateValiditySchema>;

export const validityResponseSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  employee_id: z.number(),
  status: z.string(),
  request_id: z.number().nullable().optional(),
  created_at: z.coerce.date(),
  modified_at: z.coerce.date(),
  hsvalidity_products: z.array(
    z.object({
      id: z.number(),
      validity_id: z.number(),
      product_code: z.number(),
      quantity: z.number(),
      validity_date: z.coerce.date(),
      treat_id: z.number(),
      auxiliary_code: z.string(),
      description: z.string().optional().nullable(),
    })
  ),
});
