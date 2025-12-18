import z from "zod";

export const permissionIdSchema = z.object({
  id: z.coerce.number(),
})

export const permissionSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export type Permission = z.infer<typeof permissionSchema>;

export const getPermissionSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
});

export type GetPermission = z.infer<typeof getPermissionSchema>;

export const updatePermissionSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export type UpdatePermission = z.infer<typeof updatePermissionSchema>;

export const permissionResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
})
