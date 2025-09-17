import z from "zod";

export const signUpSchema = z.object({
    email: z.email(),
    name: z.string().min(1),
    username: z.string().min(3),
    password: z.string().min(4),
    branch_id: z.number(),
    access_level: z.number(),
})

export const signInSchema = z.object({
    username: z.string(),
    password: z.string()
});