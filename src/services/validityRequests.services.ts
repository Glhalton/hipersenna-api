import { prisma } from "../lib/prisma.js"
import { createValidityRequestInput } from "../schemas/validityRequests.schemas.js";
import { getOracleConnection } from "../lib/oracleClient.js";
import oracledb from "oracledb";
import { UpdateValidityRequestsInput } from "../schemas/validityRequests.schemas.js";

export const getAllValidityRequestService = () => {
    return prisma.hsvalidity_requests.findMany();
}

//Tambem retorna as descrições dos produtos com base no banco da oracle
export const listValidityRequestsByEmployeeIdService = async (employeeId: number) => {
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

export const createValidityRequestService = async (
  validityRequestData: createValidityRequestInput,
  userId: number
) => {
  return await prisma.hsvalidity_requests.create({
    data: {
      branch_id: validityRequestData.branch_id,
      analyst_id: userId,
      conferee_id: validityRequestData.conferee_id,
      hsvalidity_request_products: {
        create: validityRequestData.products.map((p) => ({
          product_cod: p.product_cod,
          auxiliary_code: p.auxiliary_code,
          validity_date: p.validity_date,
        })),
      },
    },
    include: {
      hsvalidity_request_products: true,
    },
  });
};

export async function updateValidityRequestService({requestId, status, products}: UpdateValidityRequestsInput) {
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
