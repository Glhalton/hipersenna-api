import z from "zod";

export const permissionSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export const permissionParamSchema = z.object({
  id: z.coerce.number(),
});

export const permissionUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
});
