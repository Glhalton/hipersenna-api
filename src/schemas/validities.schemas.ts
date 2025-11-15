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
export type getValidityInput = z.infer<typeof getValiditySchema>;

export const createValiditySchema = z.object({
  branch_id: z.number(),
  request_id: z.number().optional().nullable(),
  products: z.array(
    z.object({
      product_cod: z.coerce.number(),
      auxiliary_code: z.string(),
      quantity: z.number(),
      validity_date: z.coerce.date(),
    })
  ),
});
export type createValidityInput = z.infer<typeof createValiditySchema>;

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
export type updateValidityInput = z.infer<typeof updateValiditySchema>;
