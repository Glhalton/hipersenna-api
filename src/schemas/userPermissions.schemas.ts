import z from "zod";


export const userIdSchema = z.object({
  id: z.coerce.number(),
});

export const userPermissionSchema = z.object({
  user_id: z.coerce.number(),
  permission_id: z.coerce.number().array(),
})

export type UserPermissionInput = z.infer<typeof userPermissionSchema>;