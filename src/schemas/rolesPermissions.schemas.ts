import z from "zod";

export const roleIdSchema = z.object({
    id: z.coerce.number()
})

export const rolePermissionSchema = z.object({
  role_id: z.coerce.number(),
  permission_id: z.coerce.number().array(),
})

export type RolePermission = z.infer<typeof rolePermissionSchema>;

export const rolePermissionResponseSchema = z.object({
  role_id: z.number(),
  permission_id: z.number(),
  hspermissions: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
  })
})