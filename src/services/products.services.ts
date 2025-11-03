import { getOracleConnection } from "../../oracleClient.js";
import oracledb from "oracledb";

export const getProductService = async (
  codprod?: number,
  codauxiliar?: number,
  descricao?: string,
  codfilial?: number
) => {
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

    if (codfilial) {
      conditions.push("pe.codfilial = :codfilial");
      binds.codfilial = Number(codfilial);
    }

    if (conditions.length === 0) {
      return 200;
    }

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `
            SELECT DISTINCT
                p.codepto,
                p.codprod,
                p.codauxiliar,
                p.descricao,
                p.codfornec,
                pf.codcomprador,
                ep.nome,
                pe.ptabela,
                pe.pvenda
            FROM pcprodut p
            JOIN pcprodfilial pf ON pf.codprod = p.codprod
            JOIN pcempr ep ON ep.matricula = pf.codcomprador
            JOIN pcembalagem pe ON pe.codprod = p.codprod
            ${whereClause}
        `;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    if (!result.rows || result.rows.length === 0) {
      return 404;
    }

    type ProductRow = {
      CODAUXILIAR: string;
      CODCOMPRADOR: number;
      CODPROD: number;
      CODFORNEC: number;
      CODEPTO: number;
      DESCRICAO: string;
      NOME: string;
      PTABELA: number,
      PVENDA: number
    };

    return ((result.rows as ProductRow[]) ?? []).map((row) => ({
      codAuxiliar: String(row.CODAUXILIAR),
      codComprador: row.CODCOMPRADOR,
      codProd: row.CODPROD,
      codFornec: row.CODFORNEC,
      codDepto: row.CODEPTO,
      descricao: row.DESCRICAO,
      comprador: row.NOME,
      precotabela: row.PTABELA,
      precovenda: row.PVENDA
    }));
  } finally {
    await connection.close();
  }
};
