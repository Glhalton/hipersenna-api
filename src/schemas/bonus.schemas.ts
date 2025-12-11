import { z } from "zod";

export const getBonusSchema = z.object({
    codprod: z.coerce.number().optional(),
    dtbonusstart: z.string().optional(),
    dtbonusend: z.string().optional(),
    dtvalidstart: z.string().optional(),
    dtvalidend: z.string().optional(),
    filial: z.coerce.number().optional(),
    dpart: z.coerce.number().optional(),
})

export type GetBonus = z.infer<typeof getBonusSchema>;

export const bonusResponseSchema = z.object({
    filial: z.string(),
    depart: z.number(),
    codProd:z.number(),
    descricao: z.string(),
    qtEntrada: z.number(),
    dtBonus: z.string(),
    dtValidade: z.string(),
    mediaF1: z.number(),
    mediaF2: z.number(),
    mediaF3: z.number(),
    mediaF4: z.number(),
    mediaF5: z.number(),
    mediaF7: z.number(),
})
