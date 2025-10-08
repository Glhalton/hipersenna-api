import { getOracleConnection } from "../../../oracleClient.js";
import oracledb from "oracledb";

export const getProductById = async (codprod?: number, codauxiliar?: number, descricao?: string) => {
    const connection = await getOracleConnection();
    try {

        const conditions: string[] = [];
        const binds: Record<string, any> = {};

        if (codprod) {
            conditions.push("p.codprod = :codprod");
            binds.codprod = Number(codprod);
        }

        if (descricao) {
            conditions.push("LOWER(p.descricao) LIKE LOWER(:descricao)");
            binds.descricao = `%${descricao}%`;
        }

        if (codauxiliar) {
            conditions.push("p.codauxiliar = :codauxiliar");
            binds.codauxiliar = Number(codauxiliar);
        }

        if (conditions.length === 0) {
            return 200;
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

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
            ${whereClause}
        `;

        const result = await connection.execute(query, binds, {
            outFormat: oracledb.OUT_FORMAT_OBJECT,
        });

        if (!result.rows || result.rows.length === 0) {
            return 404
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