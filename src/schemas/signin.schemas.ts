import z from "zod";

export const signInSchema = z.object({
    username: z.string({error: "Usuário ou senha inválidos"}),
    password: z.string({error: "Usuário ou senha inválidos"})
});

export type signInInput = z.infer<typeof signInSchema>
