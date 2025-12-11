import { getOracleConnection } from "../lib/oracleClient.js";
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
      conditions.push("em.codprod = :codprod");
      binds.codprod = Number(codprod);
    }

    if (descricao) {
      conditions.push("LOWER(p.descricao) LIKE LOWER(:descricao)");
      binds.descricao = `%${descricao}%`;
    }

    if (codauxiliar) {
      conditions.push("em.codauxiliar = :codauxiliar");
      binds.codauxiliar = Number(codauxiliar);
    }

    if (codfilial) {
      conditions.push("em.codfilial = :codfilial");
      conditions.push("es.codfilial = :codfilial");
      binds.codfilial = Number(codfilial);
    }

    if (conditions.length === 0) {
      return 400;
    }

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `
      SELECT DISTINCT
          p.codepto,
          em.codprod,
          em.codauxiliar,
          p.descricao,
          p.codfornec,
          em.ptabela,
          em.pvenda,
          em.fatorconversao,
          em.unidade,
          em.embalagem,
          em.ptabelaatac,
          em.pvendaatac,
          em.dtinativo,
          es.qtestger, 
          es.qtreserv,
          es.qtbloqueada,

          -- Estoque da filial 6
          (SELECT es6.qtestger
            FROM pcest es6
            WHERE es6.codprod = p.codprod
              AND es6.codfilial = 6
              AND ROWNUM = 1) AS qtestgerdp6,

          (SELECT es6.qtreserv
            FROM pcest es6
            WHERE es6.codprod = p.codprod
              AND es6.codfilial = 6
              AND ROWNUM = 1) AS qtreservdp6,

          (SELECT es6.qtbloqueada
            FROM pcest es6
            WHERE es6.codprod = p.codprod
              AND es6.codfilial = 6
              AND ROWNUM = 1) AS qtbloqueadadp6

      FROM pcprodut p
      JOIN pcembalagem em ON em.codprod = p.codprod
      JOIN pcest es ON es.codprod = p.codprod
      ${whereClause}`;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      maxRows: 250
    });

    type ProductRow = {
      CODAUXILIAR: string;
      CODPROD: number;
      CODFORNEC: number;
      CODEPTO: number;
      DESCRICAO: string;
      PTABELA: number;
      PVENDA: number;
      PTABELAATAC: number;
      PVENDAATAC: number;
      FATORCONVERSAO: number;
      UNIDADE: string;
      EMBALAGEM: string;
      DTINATIVO: string;
      QTESTGER: number;
      QTRESERV: number;
      QTBLOQUEADA: number;
      QTESTGERDP6: number;
      QTRESERVDP6: number;
      QTBLOQUEADADP6: number;
    };

    return ((result.rows as ProductRow[]) ?? []).map((row) => ({
      codAuxiliar: String(row.CODAUXILIAR),
      codProd: row.CODPROD,
      codFornec: row.CODFORNEC,
      codDepto: row.CODEPTO,
      descricao: row.DESCRICAO,
      precoTabela: row.PTABELA,
      precoVenda: row.PVENDA,
      precoTabelaAtac: row.PTABELAATAC,
      precoVendaAtac: row.PVENDAATAC,
      fatorConversao: row.FATORCONVERSAO,
      unidade: row.UNIDADE,
      embalagem: row.EMBALAGEM,
      dtInativo: row.DTINATIVO ? new Date(row.DTINATIVO).toISOString() : null,
      qtEstGer: row.QTESTGER,
      qtReserv: row.QTRESERV,
      qtBloqueada: row.QTBLOQUEADA,
      qtEstGerDp6: row.QTESTGERDP6,
      qtReservDp6: row.QTRESERVDP6,
      qtBloqueadaDp6: row.QTBLOQUEADADP6,
    }));
  } finally {
    await connection.close();
  }
};
