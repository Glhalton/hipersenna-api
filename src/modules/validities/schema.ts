import { z } from "zod";

export const createValiditiesSchema = z.object({
    branch_id: z.number(),
    employee_id: z.number(),
    request_id: z.number().optional(),
})

export const productSchema = z.object({
    product_cod: z.number(),
    quantity: z.number(),
    validity_date: z.date(),
}).strip();

export const getValiditiesParamSchema = z.object({
    validityId: z.number()
})

