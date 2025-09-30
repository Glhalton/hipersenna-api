import { prisma } from "../../lib/prisma.js"
import { createValidityRequestsBodySchema, createValidityRequestProductsBodySchema } from "./schema.js";
import { UpdateValidityRequestInput } from "./schema.js";
import { hsvalidity_requests_status } from "../../generated/prisma/client.js"
import { getOracleConnection } from "../../../oracleClient.js";
import oracledb from "oracledb";
import z from "zod";

//Tambem retorna as descrições dos produtos com base no banco da oracle
export const listValidityRequestsByEmployeeId = async (employeeId: number) => {
    const dadosPostgres = await prisma.hsvalidity_requests.findMany({
        where: {
            conferee_id: employeeId,
            status: "Pendente",
        },
        include: {
            hsvalidity_request_products: true
        }
    });

    //
    const allCodes = dadosPostgres.flatMap(req =>
        req.hsvalidity_request_products.map(p => p.product_cod)
    );

    if (allCodes.length === 0) return dadosPostgres;

    const connection = await getOracleConnection();

    const query = `
        SELECT codprod, descricao
        FROM pcprodut
        WHERE codprod IN (${allCodes.map(() => ":code").join(",")})
    `;

    const result = await connection.execute(
        query,
        allCodes,
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    await connection.close();

    const descricaoMap: Record<string, string> = {};
    (result.rows || []).forEach((row: any) => {
        descricaoMap[row.CODPROD] = row.DESCRICAO;
    });

    const enrichedData = dadosPostgres.map(req => ({
        ...req,
        hsvalidity_request_products: req.hsvalidity_request_products.map(prod => ({
            ...prod,
            description: descricaoMap[prod.product_cod] || null,
        })),
    }));

    return enrichedData;

}

type ValidityRequestInput = {
    validityRequest: z.infer<typeof createValidityRequestsBodySchema>;
    requestProducts: z.infer<typeof createValidityRequestProductsBodySchema>[];
    userId: number;
};

export const createValidityRequest = async ({ validityRequest, requestProducts, userId }: ValidityRequestInput) => {
    return await prisma.hsvalidity_requests.create({
        data: {
            branch_id: validityRequest.branch_id,
            analyst_id: userId,
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


export async function updateValidityRequest(data: UpdateValidityRequestInput) {
    const { requestId, status, products } = data;

    // Transação: tudo ou nada
    const result = await prisma.$transaction(async (tx) => {
        // Atualiza a solicitação principal
        const validityRequestUpdate = await tx.hsvalidity_requests.update({
            where: { id: requestId },
            data: { status },
        });

        // Atualiza cada produto vinculado
        await Promise.all(
            products.map((p) =>
                tx.hsvalidity_request_products.updateMany({
                    where: {
                        request_id: requestId,
                        product_cod: p.product_cod,
                    },
                    data: {
                        status: p.status,
                    },
                })
            )
        );

        return validityRequestUpdate;
    });

    return result;
}
