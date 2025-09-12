import {z} from "zod";
import { hsvalidity_requests_status } from "../../generated/prisma";

export const createValidityRequestsSchema = z.object({
    branch_id : z.number(),
    analyst_id : z.number(),
    conferee_id : z.number(),
    status : z.enum(hsvalidity_requests_status),
})