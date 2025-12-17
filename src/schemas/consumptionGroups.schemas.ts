import z from "zod";

export const createConsumptionGroupsSchema = z.object({
  description: z.string(),
});

export type ConsumptionGroups = z.infer<typeof createConsumptionGroupsSchema>;

export const getConsumptionGroupsSchema = z.object({
  id: z.coerce.number().optional(),
});

export type GetConsumptionGroups = z.infer<typeof getConsumptionGroupsSchema>;

export const updateConsumptionGroupsSchema = z.object({
  description: z.string(),
});

export type UpdateConsumptionGroups = z.infer<
  typeof updateConsumptionGroupsSchema
>;
export const consumptionGroupsId = z.object({
  id: z.coerce.number(),
});

export const consumptionGroupsResponseSchema = z.object({
  id: z.number(),
  description: z.string(),
});
