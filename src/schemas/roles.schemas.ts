import z from "zod";

export const roleIdSchema = z.object({
  id: z.coerce.number(),
});

export const getRoleSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
});

export type GetRole = z.infer<typeof getRoleSchema>;

export const roleSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export type Role = z.infer<typeof roleSchema>;

export const updateRoleSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});

export type UpdateRole = z.infer<typeof updateRoleSchema>;

export const roleResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
});
