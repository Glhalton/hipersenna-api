import z from "zod";

export const consumerGroupsSchema = z.object({
  description: z.string(),
});

export type ConsumerGroups = z.infer<typeof consumerGroupsSchema>;

export const getConsumerGroupsSchema = z.object({
  id: z.number().optional(),
});

export type GetConsumerGroups = z.infer<typeof getConsumerGroupsSchema>;

export const ConsumerGroupsResponseSchema = z.object({
  id: z.number(),
  description: z.string(),
});