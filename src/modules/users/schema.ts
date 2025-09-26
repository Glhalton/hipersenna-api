import z from "zod";

export const signUpParamSchema = z.object({
    email: z.email(),
    name: z.string().min(1),
    username: z.string().min(3),
    password: z.string().min(4),
    branch_id: z.number(),
    access_level: z.number(),
    winthor_id: z.number(),
})

export const signInParamSchema = z.object({
    username: z.string(),
    password: z.string()
});