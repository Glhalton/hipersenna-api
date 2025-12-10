import z from "zod";

export const createConsumerGroupsSchema = z.object({
  description: z.string(),
});

export type ConsumerGroups = z.infer<typeof createConsumerGroupsSchema>;

export const getConsumerGroupsSchema = z.object({
  id: z.coerce.number().optional(),
});

export type GetConsumerGroups = z.infer<typeof getConsumerGroupsSchema>;


export const updateConsumerGroupsSchema = z.object({
  description: z.string(),
});

export type UpdateConsumerGroups = z.infer<typeof updateConsumerGroupsSchema>;

export const consumerGroupsId = z.object({
  id: z.coerce.number(),
})

export const consumerGroupsResponseSchema = z.object({
  id: z.number(),
  description: z.string(),
});