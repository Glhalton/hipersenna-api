import z from "zod";

export const roleIdSchema = z.object({
  id: z.coerce.number(),
});

export const roleSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export type RoleInput = z.infer<typeof roleSchema>;

export const updateRoleSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});

export type UpdateRoleInput = z.infer<typeof updateRoleSchema>;