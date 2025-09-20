import z from "zod";
import { hsvalidity_requests_status } from "../../generated/prisma/client.js"
import { prisma } from "../../lib/prisma.js"
import { createValidityRequestsParamSchema, createValidityRequestProductsParamSchema } from "./schema.js";


export const listValidityRequestsByEmployeeId = async (employeeId: string) => {
    return await prisma.hsvalidity_requests.findMany({
        where: {
            conferee_id: employeeId,
            status: "Pendente",
        },
        include: {
            hsvalidity_request_products: true
        }
    })
}

type ValidityRequestInput = {
    validityRequest: z.infer<typeof createValidityRequestsParamSchema>;
    requestProducts: z.infer<typeof createValidityRequestProductsParamSchema>[];
};

export const createValidityRequest = async ({ validityRequest, requestProducts }: ValidityRequestInput) => {
    return await prisma.hsvalidity_requests.create({
        data: {
            branch_id: validityRequest.branch_id,
            analyst_id: validityRequest.analyst_id,
            conferee_id: validityRequest.conferee_id,
            hsvalidity_request_products: {
                create: requestProducts.map(p => ({
                    product_cod: p.product_cod,
                    validity_date: p.validity_date
                }))
            }
        },
        include: {
            hsvalidity_request_products: true
        }
    });
}

export const updateValidityRequestById = async (requestId: number, status: hsvalidity_requests_status) => {
    return await prisma.hsvalidity_requests.update({
        where: { id: requestId },
        data: { status }
    });
}
