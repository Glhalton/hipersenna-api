import z from "zod";

export const permissionSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export type PermissionInput = z.infer<typeof permissionSchema>;

export const permissionIdSchema = z.object({
  id: z.coerce.number(),
});

export const updatePermissionSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});

export type UpdatePermissionInput = z.infer<typeof updatePermissionSchema>;