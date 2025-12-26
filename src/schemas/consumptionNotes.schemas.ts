import z from "zod";

export const getConsumptionNotesSchema = z.object({
  id: z.coerce.number().optional(),
  employee_id: z.coerce.number().optional(),
});

export type GetConsumptionNotes = z.infer<typeof getConsumptionNotesSchema>;

export const createConsumptionNotesSchema = z.object({
  id: z.coerce.number().array(),
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
  generated_by_employee_id: z.number(),
  nfe_number: z.string().nullable(),
  created_at: z.date(),
  modified_at: z.date(),
  hsconsumptionProducts: z
    .object({
      id: z.number(),
      consumption_id: z.number(),
      created_by_employee_id: z.number(),
      branch_id: z.number(),
      product_code: z.number(),
      auxiliary_code: z.string(),
      quantity: z.number(),
      group_id: z.number(),
      created_at: z.date(),
      modified_at: z.date(),
      description: z.string(),
      hsconsumption_groups: z.object({
        id: z.number(),
        description: z.string(),
        created_at: z.date(),
        modified_at: z.date(),
      }),
    })
    .array()
    .optional(),
});
