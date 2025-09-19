import z from "zod";
import { hsvalidity_requests_status } from "../../generated/prisma/client.js"
import { prisma } from "../../lib/prisma.js"
import { createValidityRequestsSchema, productsRequestSchema } from "./schema.js";


export async function getValidityRequestsByEmployeeId(employeeId: string) {
    return await prisma.hsvalidity_requests.findMany({
        where: {
            conferee_id: employeeId
        },
        include: {
            hsvalidity_request_products: true
        }
    })
}

type ValidityRequestInput = {
    validityRequest: z.infer<typeof createValidityRequestsSchema>;
    productsRequest: z.infer<typeof productsRequestSchema>[];
};

export const createValidityRequest = async ({ validityRequest, productsRequest }: ValidityRequestInput) => {
    const createdValidityRequest = await prisma.hsvalidity_requests.create({
        data: {
            branch_id: validityRequest.branch_id,
            analyst_id: validityRequest.analyst_id,
            conferee_id: validityRequest.conferee_id,
            hsvalidity_request_products: {
                create: productsRequest.map(p => ({
                    product_cod: p.product_cod,
                    validity_date: p.validity_date
                }))
            }
        },
        include: {
            hsvalidity_request_products: true
        }
    });

    return createValidityRequest;
}

export async function updateValidityRequestById(requestId: number, status: hsvalidity_requests_status){
    return await prisma.hsvalidity_requests.update({
        where: {id: requestId},
        data: {status}
    });
}
