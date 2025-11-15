import {z} from "zod";

export const sessionSchema = z.object({
    userId: z.coerce.number().optional(),
    sessionId: z.coerce.string().optional()
})

export type sessionSchemaInput = z.infer<typeof sessionSchema>

export const sessionIdSchema = z.object({
    id: z.string()
})

export type sessionIdSchemaInput = z.infer<typeof sessionIdSchema>