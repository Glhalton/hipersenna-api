import z from "zod";

export const getPushTokensSchema = z.object({
  id: z.number(),
  employee_id: z.number(),
  device_id: z.number(),
  platform: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
  last_used_at: z.date(),
});

export const createPushTokensSchema = z.object({
  token: z.string(),
  deviceId: z.string(),
  platform: z.string(),
});

export type CreatePushTokens = z.infer<typeof createPushTokensSchema>;

export const deletePushTokensSchema = z.object({
  deviceId: z.string(),
  employeeId: z.number(),
});

export type DeletePushTokens = z.infer<typeof deletePushTokensSchema>;
