import z from "zod";

export const getConsumerNotesSchema = z.object({
    id: z.number().optional(),
    employee_id: z.number().optional(),
})

export type GetConsumerNotes = z.infer<typeof getConsumerNotesSchema>

export const createConsumerNotesSchema = z.object({
    id: z.coerce.number().array(),
})

export type CreateConsumerNotes = z.infer<typeof createConsumerNotesSchema>

export const consumerNotesId = z.object({
    id: z.number()
})

export const consumerNotesResponse = z.object({
    id: z.number(),
    employee_id:z.number(),
    created_at: z.date(),
    modified_at:z.date(),
})