import z from "zod";

export const signUpBodySchema = z.object({
    name: z.string().min(1),
    username: z.string().min(3),
    password: z.string().min(4),
    branch_id: z.number(),
    access_level: z.number(),
    winthor_id: z.number(),
})

export const signInBodySchema = z.object({
    username: z.string(),
    password: z.string()
});