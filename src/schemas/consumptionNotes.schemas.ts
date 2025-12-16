import z from "zod";

export const getconsumptionNotesSchema = z.object({
    id: z.number().optional(),
    employee_id: z.number().optional(),
})

export type GetconsumptionNotes = z.infer<typeof getconsumptionNotesSchema>

export const createconsumptionNotesSchema = z.object({
    id: z.coerce.number().array(),
})

export type CreateconsumptionNotes = z.infer<typeof createconsumptionNotesSchema>

export const consumptionNotesId = z.object({
    id: z.number()
})

export const consumptionNotesResponse = z.object({
    id: z.number(),
    generated_by_employee_id:z.number(),
    created_at: z.date(),
    modified_at:z.date(),
})