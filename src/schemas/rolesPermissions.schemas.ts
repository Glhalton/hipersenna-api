import z from "zod";

export const roleIdSchema = z.object({
    id: z.coerce.number()
})


export const rolePermissionSchema = z.object({
  role_id: z.coerce.number(),
  permission_id: z.coerce.number().array(),
})

export type RolePermissionInput = z.infer<typeof rolePermissionSchema>;