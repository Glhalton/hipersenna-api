import { prisma } from "../../lib/prisma.js"
import { createValidityRequestsParamSchema, createValidityRequestProductsParamSchema } from "./schema.js";
import { hsvalidity_requests_status } from "../../generated/prisma/client.js"
import { getOracleConnection } from "../../../oracleClient.js";
import oracledb from "oracledb";
import z from "zod";

//Tambem retorna as descrições dos produtos com base no banco da oracle
export const listValidityRequestsByEmployeeId = async (employeeId: string) => {
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
