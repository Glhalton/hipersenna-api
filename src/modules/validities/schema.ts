import { z } from "zod";

export const createValidityParamSchema = z.object({
    branch_id: z.number(),
    employee_id: z.string(),
    request_id: z.number().optional().nullable(),
})

export const createValidityProductParamSchema = z.object({
    product_cod: z.number(),
    quantity: z.number(),
    validity_date: z.coerce.date(),
}).strip();

export const getValidityParamSchema = z.object({
    validityId: z.number()
})

export const listValiditiesByEmployeeParamSchema = z.object({
    employeeId: z.string()
})


