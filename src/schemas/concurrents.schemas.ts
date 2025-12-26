import z from "zod";

export const getConcurrentSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().optional(),
});

export type GetConcurrent = z.infer<typeof getConcurrentSchema>;

export const concurrentResponseSchema = z.object({
  concurrentCode: z.string(),
  concurrentName: z.string(),
  active: z.string().nullable(),
});

export const oracleConcurrentSchema = z.object({
  CODCONC: z.string(),
  CONCORRENTE: z.string(),
  ATIVO: z.string(),
});

export type OracleConcurrent = z.infer<typeof oracleConcurrentSchema>;
