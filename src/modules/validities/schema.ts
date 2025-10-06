import { z } from "zod";

export const createValidityBodySchema = z.object({
    branch_id: z.number(),
    request_id: z.number().optional().nullable(),
});

export const createValidityProductBodySchema = z.object({
    product_cod: z.number(),
    quantity: z.number(),
    validity_date: z.coerce.date(),
}).strip();

export const getValidityParamSchema = z.object({
    validityId: z.coerce.number()
});


