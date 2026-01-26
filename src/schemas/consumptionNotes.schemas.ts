import z from "zod";

export const getConsumptionNotesSchema = z.object({
  id: z.coerce.number().optional(),
  employee_id: z.coerce.number().optional(),
});

export type GetConsumptionNotes = z.infer<typeof getConsumptionNotesSchema>;

export const createConsumptionNotesSchema = z.object({
  branch_id: z.coerce.number(),
  group_id: z.coerce.number(),
  signature: z.string().optional().nullable(),
  products: z.array(
    z.object({
      product_code: z.coerce.number(),
      auxiliary_code: z.string(),
      quantity: z.coerce.number(),
    }),
  ),
});

export type CreateConsumptionNotes = z.infer<
  typeof createConsumptionNotesSchema
>;

export const updateConsumptionNotesSchema = z.object({
  nfe_number: z.string(),
});

export type UpdateConsumptionNotes = z.infer<
  typeof updateConsumptionNotesSchema
>;

export const consumptionNotesIdSchema = z.object({
  id: z.coerce.number(),
});

export const consumptionNotesResponseSchema = z.object({
  id: z.number(),
  branch_id: z.number(),
  created_by_employee_id: z.coerce.number(),
  nfe_number: z.string().nullable(),
  signature: z.string().nullable(),
  group_id: z.number(),
  created_at: z.date(),
  modified_at: z.date(),
  hsconsumptionProducts: z
    .object({
      id: z.number(),
      consumption_note_id: z.number(),
      product_code: z.number(),
      auxiliary_code: z.string(),
      quantity: z.coerce.number(),
      description: z.string().optional(),
    })
    .array()
    .optional(),
  hsconsumption_groups: z
    .object({
      description: z.string(),
    })
    .optional(),
});
