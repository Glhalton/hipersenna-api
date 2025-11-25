import { z } from "zod";
import { hsvalidity_request_products_status, hsvalidity_requests_status } from "../../generated/prisma/index.js";

export const getValidityRequestsSchema = z.object({
  id: z.coerce.number().optional(),
  branch_id: z.coerce.number().optional(),
  analyst_id: z.coerce.number().optional(),
  conferee_id: z.coerce.number().optional(),
  status: z.string().optional(),
});

export type GetValidityRequests = z.infer<typeof getValidityRequestsSchema>;

export const createValidityRequestSchema = z.object({
  branch_id: z.number(),
  conferee_id: z.number(),
  products: z.array(
    z.object({
      product_code: z.number(),
      auxiliary_code: z.string(),
      validity_date: z.coerce.date(),
    })
  ),
});
export type createValidityRequestInput = z.infer<
  typeof createValidityRequestSchema
>;

export const updateValidityRequestsSchema = z.object({
  requestId: z.number(),
  status: z.any(),
  products: z.array(
    z.object({
      id: z.number(),
      status: z.any()
    })
  ),
});

export type UpdateValidityRequestsInput = z.infer<
  typeof updateValidityRequestsSchema
>;

export const validityRequestResponseSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  analyst_id: z.number(),
  conferee_id: z.number(),
  status: z.string(),
  created_at: z.coerce.date(),
  modified_at: z.coerce.date(),
  hsvalidity_request_products: z.array(
    z.object({
      id: z.number(),
      request_id: z.number(),
      status: z.string(),
      product_code: z.number(),
      validity_date: z.coerce.date(),
      auxiliary_code: z.string(),
      description: z.string(),
    })
  ),
});
