import z from "zod";


export const userIdSchema = z.object({
  id: z.coerce.number(),
});

export const userPermissionSchema = z.object({
  user_id: z.coerce.number(),
  permission_id: z.coerce.number().array(),
})

export type UserPermission = z.infer<typeof userPermissionSchema>;

export const userPermissionsResponseSchema = z.object({
  user_id: z.number(),
  permission_id: z.number(),
  hspermissions: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
  })
})