import {z} from "zod";
import { hsvalidity_requests_status } from "../../generated/prisma/client.js";

export const createValidityRequestsSchema = z.object({
    branch_id : z.number(),
    analyst_id : z.string(),
    conferee_id : z.string(),
    status : z.enum(hsvalidity_requests_status),
})