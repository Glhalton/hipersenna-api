import { z } from "zod";
import { hsvalidity_request_products_status, hsvalidity_requests_status } from "../generated/prisma/client.js";

export const validityRequestSchema = z.object({
    branch_id: z.number(),
    conferee_id: z.number(),
})

export const validityRequestProductSchema = z.object({
    product_cod: z.number(),
    validity_date: z.coerce.date(),
}).strip();

export const updateValidityRequestsSchema = z.object({
    requestId: z.number(),
    status: z.enum(hsvalidity_requests_status),
    products: z.array(
        z.object({
            product_cod: z.number(),
            status: z.enum(hsvalidity_request_products_status),
        })
    ),
});

export type UpdateValidityRequestsInput = z.infer<typeof updateValidityRequestsSchema>;

export type ValidityRequestInput = {
    validityRequest: z.infer<typeof validityRequestSchema>;
    requestProducts: z.infer<typeof validityRequestProductSchema>[];
    userId: number;
};