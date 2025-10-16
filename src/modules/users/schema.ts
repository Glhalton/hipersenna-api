import z from "zod";

export const signUpBodySchema = z.object({
    name: z.string().min(1),
    username: z.string().min(3),
    password: z.string().min(4),
    branch_id: z.number(),
    winthor_id: z.number(),
})

 export const userSchema = z.object({
    id: z.coerce.number()
 })

 export const updateUserBodySchema = z.object({
    name: z.string().min(1).optional(),
    username: z.string().min(3).optional(),
    password: z.string().min(4).optional(),
    branch_id: z.number().optional(),
    winthor_id: z.number().optional(),
})