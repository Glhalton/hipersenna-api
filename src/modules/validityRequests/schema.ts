import { z } from "zod";
import { hsvalidity_request_products_status, hsvalidity_requests_status } from "../../generated/prisma/client.js";

export const createValidityRequestsBodySchema = z.object({
    branch_id: z.number(),
    conferee_id: z.number(),
})

export const createValidityRequestProductsBodySchema = z.object({
    product_cod: z.number(),
    validity_date: z.coerce.date(),
}).strip();

export const updateValidityRequestByIdBodySchema = z.object({
    requestId: z.number(),
    status: z.enum(hsvalidity_requests_status),
    products: z.array(
        z.object({
            product_cod: z.number(),
            status: z.enum(hsvalidity_request_products_status),
        })
    ),
});

export type UpdateValidityRequestInput = z.infer<typeof updateValidityRequestByIdBodySchema>;