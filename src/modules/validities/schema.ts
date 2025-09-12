import { z } from "zod";
import { hsvalidities_status } from "../../generated/prisma";

export const createValiditiesSchema = z.object({
    branch_id: z.number(),
    employee_id: z.number(),
    status: z.enum(hsvalidities_status),
    request_id: z.number().optional(),
})