import z from "zod";

export const userIdSchema = z.object({
    id: z.coerce.number()
})

export const userRoleSchema = z.object({
    user_id: z.coerce.number(),
    role_id: z.coerce.number(),
});

export type UserRoleInput = z.infer<typeof userRoleSchema>;
