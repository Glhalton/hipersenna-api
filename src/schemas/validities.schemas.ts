import { z } from "zod";

export const createValiditySchema = z.object({
    branch_id: z.number(),
    request_id: z.number().optional().nullable(),
});

export const productSchema = z.object({
    product_cod: z.number(),
    quantity: z.number(),
    validity_date: z.coerce.date(),
}).strip();

export const validityIdSchema = z.object({
    id: z.coerce.number()
});

export type ValidityInput = {
    validity: z.infer<typeof createValiditySchema>;
    products: z.infer<typeof productSchema>[];
    userId: number;
};

