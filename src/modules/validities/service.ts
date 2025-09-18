import z from "zod";
import { prisma } from "../../lib/prisma.js"
import { createValiditiesSchema, productSchema } from "./schema.js";

export async function getValidityById(validityId: number) {
    return await prisma.hsvalidities.findUnique({
        where: {
            id: validityId
        }
    })
}

export async function getValidityByEmployeeId(employeeId: string) {
    return await prisma.hsvalidities.findMany({
        where: {
            employee_id: employeeId
        },
        include: {
            hsvalidity_products: true,
        }
    })
}

type ValidityInput = {
    validity: z.infer<typeof createValiditiesSchema>;
    products: z.infer<typeof productSchema>[];
};

export const createValidity = async ({ validity, products }: ValidityInput) => {
    const createdValidity = await prisma.hsvalidities.create({
        data: {
            branch_id: validity.branch_id,
            employee_id: validity.employee_id,
            request_id: validity.request_id || null,
            hsvalidity_products: {
                create: products.map(p => ({
                    product_cod: p.product_cod,
                    quantity: p.quantity,
                    validity_date: p.validity_date
                }))
            }
        },
        include: {
            hsvalidity_products: true
        }
    });

    return createdValidity;
}

