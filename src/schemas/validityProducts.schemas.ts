import z from "zod";

export const getValidityProductsSchema = z.object({
  id: z.coerce.number().optional(),
  branchId: z.coerce.number().optional(),
  department: z.coerce.number().optional(),
  createdByEmployee: z.coerce.number().optional(),
  initialCreationDate: z.coerce.date().optional(),
  finalCreationDate: z.coerce.date().optional(),
  initialValidityDate: z.coerce.date().optional(),
  finalValidityDate: z.coerce.date().optional(),
  expiresDays: z.coerce.number().optional(),
  productCode: z.coerce.number().optional(),
  auxiliaryCode: z.string().optional(),
  cursor: z.coerce.number().optional(),
  limit: z.coerce.number().optional(),
});

export type GetValidityProducts = z.infer<typeof getValidityProductsSchema>;
