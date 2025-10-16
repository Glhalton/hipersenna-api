import z from "zod";

export const roleSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export const roleParamSchema = z.object({
  id: z.coerce.number(),
});

export const roleUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});
