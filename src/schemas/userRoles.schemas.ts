import z from "zod";

export const userIdSchema = z.object({
  id: z.coerce.number(),
});

export const userRoleSchema = z.object({
  user_id: z.coerce.number(),
  role_id: z.coerce.number(),
});

export type UserRole = z.infer<typeof userRoleSchema>;

export const userRolesResponseSchema = z.object({
  role_id: z.number(),
  hsroles: z.object({
    description: z.string(),
    name: z.string(),
  }),
});
