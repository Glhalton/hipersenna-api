import z from "zod";
import { prisma } from "../../lib/prisma.js"
import { createValidityBodySchema, createValidityProductBodySchema } from "./schema.js";
import { getOracleConnection } from "../../../oracleClient.js";
import oracledb from "oracledb";

type ValidityInput = {
    validity: z.infer<typeof createValidityBodySchema>;
    products: z.infer<typeof createValidityProductBodySchema>[];
    userId: number;
};

export const getValidityById = async (id: number) => {
    return await prisma.hsvalidities.findUnique({
        where: {
            id
        }
    })
}

export const listValiditiesByEmployeeId = async (employeeId: number) => {
    const postgreData = await prisma.hsvalidities.findMany({
        where: {
            employee_id: employeeId
        },
        include: {
            hsvalidity_products: true,
        }
    });

    const allCodes = postgreData.flatMap(req =>
        req.hsvalidity_products.map(p => p.product_cod)
    );

    if (allCodes.length === 0) return postgreData;

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

    const enrichedData = postgreData.map(req => ({
        ...req,
        hsvalidity_products: req.hsvalidity_products.map(prod => ({
            ...prod,
            description: descricaoMap[prod.product_cod] || null,
        })),
    }));

    return enrichedData;
}

export const createValidity = async ({ validity, products, userId }: ValidityInput) => {
    return await prisma.hsvalidities.create({
        data: {
            branch_id: validity.branch_id,
            employee_id: userId,
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
}

