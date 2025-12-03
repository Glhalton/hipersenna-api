import z from "zod";

export const getRaffleClientSchema = z.object({
  id: z.number().optional(),
  cpf: z.string().optional(),
});

export type GetRaffleClient = z.infer<typeof getRaffleClientSchema>;

export const createRaffleClientSchema = z.object({
  name: z.string(),
  cpf: z.string(),
});

export type CreateRaffleClient = z.infer<typeof createRaffleClientSchema>;
