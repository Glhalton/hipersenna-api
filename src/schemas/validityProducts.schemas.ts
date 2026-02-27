import z from "zod";

export const getValidityProductsSchema = z.object({
  id: z.coerce.number().optional(),
  initialCreationDate: z.coerce.date().optional(),
  finalCreationDate: z.coerce.date().optional(),
  initialValidityDate: z.coerce.date().optional(),
  finalValidityDate: z.coerce.date().optional(),
  branchId: z.coerce.number().optional(),
  expiresDays: z.coerce.number().optional(),
  description: z.string().optional(),
  orderBy: z.enum(["asc", "desc"]).optional(),
});

export type GetValidityProducts = z.infer<typeof getValidityProductsSchema>;
