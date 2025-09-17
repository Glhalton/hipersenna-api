import { z } from "zod";

export const createValiditiesSchema = z.object({
    branch_id: z.number(),
    employee_id: z.string(),
    request_id: z.number().optional().nullable(),
})

export const productSchema = z.object({
    product_cod: z.number(),
    quantity: z.number(),
    validity_date: z.coerce.date(),
}).strip();

export const getValiditiesParamSchema = z.object({
    validityId: z.number()
})

