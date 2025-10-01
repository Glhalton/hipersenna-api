import { getOracleConnection } from "../../../oracleClient.js";
import oracledb from "oracledb";

export const getProductById = async (productId: number) => {
    const connection = await getOracleConnection();

    try {
        const query = `
            SELECT DISTINCT
                p.codepto,
                p.codprod,
                p.codauxiliar,
                p.descricao,
                p.codfornec,
                pf.codcomprador,
                ep.nome
            FROM pcprodut p
            JOIN pcprodfilial pf ON pf.codprod = p.codprod
            JOIN pcempr ep ON ep.matricula = pf.codcomprador
            WHERE p.codprod = :productId
        `;

        const result = await connection.execute(
            query, [productId], { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        if (!result.rows || result.rows.length === 0) {
            return [];
        }

        type ProductRow = {
            CODAUXILIAR: number;
            CODCOMPRADOR: number;
            CODPROD: number;
            CODFORNEC: number;
            CODEPTO: number;
            DESCRICAO: string;
            NOME: string;
        };

        return (result.rows as ProductRow[] ?? []).map(row => ({
            codAuxiliar: row.CODAUXILIAR,
            codComprador: row.CODCOMPRADOR,
            codProd: row.CODPROD,
            codFornec: row.CODFORNEC,
            codDepto: row.CODEPTO,
            descricao: row.DESCRICAO,
            nome: row.NOME,
        }));

    } finally {
        await connection.close();
    }
}