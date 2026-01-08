import { Prisma } from "@prisma/client";
import { z } from "zod";

export const validityIdSchema = z.object({
  id: z.coerce.number(),
});

export const getValiditySchema = z.object({
  id: z.coerce.number().optional(),
  initialCreationDate: z.coerce.date().optional(),
  finalCreationDate: z.coerce.date().optional(),
  initialValidityDate: z.coerce.date().optional(),
  finalValidityDate: z.coerce.date().optional(),
  branch_id: z.coerce.number().optional(),
  expiresDays: z.coerce.number().optional(),
  descricao: z.string().optional(),
});
export type GetValidity = z.infer<typeof getValiditySchema>;

export const getMyValiditiesSchema = z.object({
  orderBy: z.enum(["asc", "desc"]).optional(),
});

export type GetMyValidities = z.infer<typeof getMyValiditiesSchema>;

export const createValiditySchema = z.object({
  branch_id: z.number(),
  request_id: z.number().optional().nullable(),
  products: z.array(
    z.object({
      product_code: z.coerce.number(),
      auxiliary_code: z.string(),
      quantity: z.number(),
      validity_date: z.coerce.date(),
    })
  ),
});
export type CreateValidity = z.infer<typeof createValiditySchema>;

export const updateValiditySchema = z.array(
  z.object({
    validity_id: z.number().int().positive(),
    products: z.array(
      z.object({
        product_id: z.number().int().positive(),
        treat_id: z.number().int().positive(),
      })
    ),
  })
);
export type UpdateValidity = z.infer<typeof updateValiditySchema>;

export const validityResponseSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  employee_id: z.number(),
  status: z.string(),
  request_id: z.number().nullable().optional(),
  created_at: z.coerce.date(),
  modified_at: z.coerce.date(),
  hsvalidity_products: z.array(
    z.object({
      id: z.number(),
      validity_id: z.number(),
      product_code: z.number(),
      quantity: z.number(),
      validity_date: z.coerce.date(),
      treat_id: z.number(),
      auxiliary_code: z.string(),
      description: z.string().optional().nullable(),
      department_id: z.number().optional(),
      supplier_id: z.number().optional(),
      supplier_name: z.string().optional(),
      buyer_id: z.number().optional(),
      buyer_name: z.string().optional(),
      average1: z.number().optional(),
      average2: z.number().optional(),
      average3: z.number().optional(),
      average4: z.number().optional(),
      average5: z.number().optional(),
      average7: z.number().optional(),
      average8: z.number().optional(),
    })
  ),
});

export const oracleProductSchema = z.object({
  CODPROD: z.number(),
  DESCRICAO: z.number(),
  CODEPTO: z.number(),
  CODFORNEC: z.number(),
  FORNECEDOR: z.number(),
  CODCOMPRADOR: z.number(),
  NOME: z.string(),
  MEDIA1: z.number(),
  MEDIA2: z.number(),
  MEDIA3: z.number(),
  MEDIA4: z.number(),
  MEDIA5: z.number(),
  MEDIA7: z.number(),
  MEDIA8: z.number(),
});

export type OracleProduct = z.infer<typeof oracleProductSchema>;
