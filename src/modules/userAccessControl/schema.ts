import z from "zod";

export const userAccessControlSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export const userAccessControlParamSchema = z.object({
  id: z.coerce.number(),
});

export const userRoleSchema = z.object({
  user_id: z.coerce.number(),
  role_id: z.coerce.number(),
});