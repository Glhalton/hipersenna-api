import { z } from "zod";
import { hsvalidity_requests_status } from "../../generated/prisma/client.js";

export const getValidityRequestsByEmployeeIdParamSchema = z.object({
    employeeId: z.string()
})

export const createValidityRequestsSchema = z.object({
    branch_id: z.number(),
    analyst_id: z.string(),
    conferee_id: z.string(),
})

export const productsRequestSchema = z.object({
    product_cod: z.number(),
    validity_date: z.coerce.date(),
}).strip();

export const updateValidityRequestByIdParamSchema = z.object({
    requestId: z.number(),
    status: hsvalidity_requests_status
})
