import z from "zod";

export const getNotificationSchema = z.object({
  id: z.number(),
  employee_id: z.number(),
  title: z.string(),
  body: z.string(),
  type: z.string(),
  reference_id: z.number().nullable(),
  read_at: z.date().nullable(),
  created_at: z.date(),
});

export type GetNotification = z.infer<typeof getNotificationSchema>;

export const createNotificationSchema = z.object({
  title: z.string(),
  body: z.string(),
  type: z.string(),
  reference_id: z.number().optional(),
});

export type CreateNotification = z.infer<typeof createNotificationSchema>;
