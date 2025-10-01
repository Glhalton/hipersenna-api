import { z } from "zod";

export const getProductParamSchema = z.object({
    productId: z.coerce.number()
})