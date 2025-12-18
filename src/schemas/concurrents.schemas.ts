import z from "zod";

export const getConcurrentSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().optional(),
});

export type GetConcurrent = z.infer<typeof getConcurrentSchema>;

export const concurrentResponseSchema = z.object({
    codConc: z.string(),
    concorrente: z.string(),
    ativo: z.string().nullable(),
})