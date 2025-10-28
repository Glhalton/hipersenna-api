import z from "zod";

export const userIdSchema = z.object({
  id: z.coerce.number(),
});

export const createUserSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(3),
  password: z.string().min(4),
  branch_id: z.number(),
  winthor_id: z.number(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  username: z.string().min(3).optional(),
  password: z.string().min(4).optional(),
  branch_id: z.number().optional(),
  winthor_id: z.number().optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
