import z from "zod";

export const branchDescriptionSchema = z.object({
  description: z.string(),
});

export type BranchDescription = z.infer<typeof branchDescriptionSchema>;

export const branchesIdSchema = z.object({
  id: z.coerce.number().describe("Branch id"),
});

export type BranchesId = z.infer<typeof branchesIdSchema>;

export const getBranchesSchema = z.object({
  id: z.number().describe("Branch id").optional(),
});

export type GetBranches = z.infer<typeof getBranchesSchema>;

export const branchesResponseSchema = z.object({
  id: z.number(),
  description: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
});
