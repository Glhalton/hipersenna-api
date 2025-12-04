import z from "zod";

export const getRaffleSchema = z.object({
  id: z.number().optional(),
  client_id: z.number().optional(),
  nfc_key: z.string().optional(),
  branch_id: z.string().optional(),
  status: z.any().optional(),
});

export type GetRaffle = z.infer<typeof getRaffleSchema>;

export const createRaffleSchema = z.object({
  nfc_key: z.string(),
});

export type CreateRaffle = z.infer<typeof createRaffleSchema>;

export const updateRaffleSchema = z.object({
  raffle_number: z.string().optional(),
});

export type UpdateRaffle = z.infer<typeof updateRaffleSchema>;

export const drawRafflesSchema = z.object({
  branch_id: z.coerce.number(),
});

export type DrawRaffles = z.infer<typeof drawRafflesSchema>;

export const raffleResponseSchema = z.object({
  id: z.number(),
  client_id: z.number(),
  nfc_key: z.string(),
  raffle_number: z.string(),
  branch_id: z.number(),
  status: z.any(),
  created_at: z.date(),
  modified_at: z.date(),
});
