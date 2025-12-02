import z from "zod";

export const userIdSchema = z.object({
  id: z.coerce.number(),
});

export const getUserSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().optional(),
  username: z.string().optional(),
  winthor_id: z.coerce.number().optional(),
  branch_id: z.coerce.number().optional(),
  role_id: z.coerce.number().optional()
});

export type GetUserInput = z.infer<typeof getUserSchema>;

export const createUserSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(3),
  password: z.string().min(4),
  branch_id: z.number(),
  winthor_id: z.number(),
  role_id: z.number(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  username: z.string().min(3).optional(),
  password: z.string().min(4).optional(),
  branch_id: z.number().optional(),
  winthor_id: z.number().optional(),
  role_id: z.number().optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export const userResponseSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  winthor_id: z.number(),
  role_id: z.number(),
  name: z.string(),
  username: z.string(),
  created_at: z.coerce.date(),
  modified_at: z.coerce.date(),
  hsusers_permissions: z.array(
    z.object({
      permission_id: z.number(),
      hspermissions: z.object({
        description: z.string(),
      }),
    })
  ).optional(),
});
