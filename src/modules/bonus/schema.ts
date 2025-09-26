import { z } from "zod";

export const bonusFilterSchema = z.object({
    codprod: z.number().optional(),
    dtbonusstart: z.string().optional(),
    dtbonusend: z.string().optional(),
    dtvalidstart: z.string().optional(),
    dtvalidend: z.string().optional(),
    filial: z.number().optional(),
    dpart: z.number().optional(),
})

export type BonusQuery = z.infer<typeof bonusFilterSchema>;