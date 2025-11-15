import { z } from "zod";
import {
  hsvalidity_request_products_status,
  hsvalidity_requests_status,
} from "@prisma/client";

// export const validityRequestSchema = z.object({
//   branch_id: z.number(),
//   conferee_id: z.number(),
// });

// export const validityRequestProductSchema = z
//   .object({
//     product_cod: z.number(),
//     auxiliary_code: z.string(),
//     validity_date: z.coerce.date(),
//   })
//   .strip();

export const createValidityRequestSchema = z.object({
  branch_id: z.number(),
  conferee_id: z.number(),
  products: z.array(
    z.object({
      product_cod: z.number(),
      auxiliary_code: z.string(),
      validity_date: z.coerce.date(),
    })
  ),
});
export type createValidityRequestInput = z.infer<typeof createValidityRequestSchema>;

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

export type UpdateValidityRequestsInput = z.infer<
  typeof updateValidityRequestsSchema
>;

