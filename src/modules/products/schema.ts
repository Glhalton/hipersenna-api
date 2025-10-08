import { z } from "zod";

export const getProductParamSchema = z.object({
    codprod: z.coerce.number().optional(),
    descricao: z.coerce.string().optional(),
    codauxiliar: z.coerce.number().optional(),
})