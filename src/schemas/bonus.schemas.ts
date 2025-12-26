import { z } from "zod";

export const getBonusSchema = z.object({
  codprod: z.coerce.number().optional(),
  dtbonusstart: z.string().optional(),
  dtbonusend: z.string().optional(),
  dtvalidstart: z.string().optional(),
  dtvalidend: z.string().optional(),
  filial: z.coerce.number().optional(),
  dpart: z.coerce.number().optional(),
});

export type GetBonus = z.infer<typeof getBonusSchema>;

export const bonusResponseSchema = z.object({
  branchId: z.string(),
  department: z.number(),
  productCode: z.number(),
  description: z.string(),
  inputQuantity: z.number(),
  bonusDate: z.string(),
  validityDate: z.string(),
  average1: z.number(),
  average2: z.number(),
  average3: z.number(),
  average4: z.number(),
  average5: z.number(),
  average7: z.number(),
});

export const oracleBonusSchema = z.object({
  FILIAL: z.string(),
  DPART: z.number(),
  CODPROD: z.number(),
  DESCRICAO: z.string(),
  QTENTRADA: z.number(),
  DTBONUS: z.string(),
  DTVALIDADE: z.string(),
  MEDIAF1: z.number(),
  MEDIAF2: z.number(),
  MEDIAF3: z.number(),
  MEDIAF4: z.number(),
  MEDIAF5: z.number(),
  MEDIAF7: z.number(),
});

export type OracleBonusSchema = z.infer<typeof oracleBonusSchema>;
