import z from "zod";

export const getRaffleClientSchema = z.object({
  id: z.number().optional(),
  cpf: z.string().optional(),
});

export type GetRaffleClient = z.infer<typeof getRaffleClientSchema>;

export const createRaffleClientSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  telephone: z.string(),
});

export type CreateRaffleClient = z.infer<typeof createRaffleClientSchema>;

export const updateRaffleClientSchema = z.object({
  name: z.string().optional(),
  cpf: z.string().optional(),
  telephone: z.string().optional(),
});

export type UpdateRaffleClient = z.infer<typeof updateRaffleClientSchema>;

export const raffleClientResponseSchema = z.object({
  id: z.number(),
  cpf: z.string(),
  name: z.string(),
  telephone: z.string(),
  created_at: z.date(),
  modified_at: z.date(),
});

export const raffleClientIdSchema = z.object({
  id: z.coerce.number()
})
