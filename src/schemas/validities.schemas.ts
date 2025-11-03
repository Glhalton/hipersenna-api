import { z } from "zod";

export const createValiditySchema = z.object({
  branch_id: z.number(),
  request_id: z.number().optional().nullable(),
});

export const productSchema = z
  .object({
    product_cod: z.number(),
    auxiliary_code: z.string(),
    quantity: z.number(),
    validity_date: z.coerce.date(),
  })
  .strip();

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
})

export type getValidityInput = z.infer<typeof getValiditySchema>;

export type ValidityInput = {
  validity: z.infer<typeof createValiditySchema>;
  products: z.infer<typeof productSchema>[];
  userId: number;
};
