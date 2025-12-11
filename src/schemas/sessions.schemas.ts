import { z } from "zod";

export const getSessionSchema = z.object({
  userId: z.coerce.number().optional(),
  sessionId: z.coerce.string().optional(),
});

export type GetSession = z.infer<typeof getSessionSchema>;

export const sessionIdSchema = z.object({
  id: z.string(),
});

export type SessionId = z.infer<typeof sessionIdSchema>;

export const sessionResponseSchema = z.object({
  id: z.uuid(),
  created_at: z.date(),
  expires_at: z.date(),
  user: z.object({
    id: z.number(),
    winthor_id: z.number(),
    name: z.string(),
    username: z.string(),
  }),
});
