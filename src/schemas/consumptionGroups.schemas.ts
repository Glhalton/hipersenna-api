import z from "zod";

export const createconsumptionGroupsSchema = z.object({
  description: z.string(),
});

export type consumptionGroups = z.infer<typeof createconsumptionGroupsSchema>;

export const getconsumptionGroupsSchema = z.object({
  id: z.coerce.number().optional(),
});

export type GetconsumptionGroups = z.infer<typeof getconsumptionGroupsSchema>;


export const updateconsumptionGroupsSchema = z.object({
  description: z.string(),
});

export type UpdateconsumptionGroups = z.infer<typeof updateconsumptionGroupsSchema>;

export const consumptionGroupsId = z.object({
  id: z.coerce.number(),
})

export const consumptionGroupsResponseSchema = z.object({
  id: z.number(),
  description: z.string(),
});