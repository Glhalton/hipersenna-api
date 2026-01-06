import { BadRequest } from "../errors/badRequest.error.js";
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
      conditions.push("p.codprod = :codprod");
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
      binds.codfilial = Number(codfilial);
    }

    if (conditions.length === 0) {
      throw new BadRequest("Informe pelo menos um filtro de busca");
    }

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `
    SELECT
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

          es6.qtestger    AS qtestgerdp6,
          es6.qtreserv    AS qtreservdp6,
          es6.qtbloqueada AS qtbloqueadadp6,

          ofe.vloferta

    FROM pcprodut p

    JOIN pcembalagem em
    ON em.codprod = p.codprod

    JOIN pcest es
    ON es.codprod   = p.codprod
    AND es.codfilial = em.codfilial

    LEFT JOIN pcest es6
    ON es6.codprod   = p.codprod
    AND es6.codfilial = 6

    LEFT JOIN (
        SELECT oi.codprod,
              oc.codfilial,
              MIN(oi.vloferta) AS vloferta
        FROM pcofertaprogramadai oi
        JOIN pcofertaprogramadac oc
          ON oc.codoferta = oi.codoferta
        WHERE oc.dtfinal  > DATE '2026-01-06'
          AND oc.dtcancel IS NULL
        GROUP BY oi.codprod, oc.codfilial
    ) ofe
      ON ofe.codprod   = p.codprod
    AND ofe.codfilial = em.codfilial
    ${whereClause}`;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      maxRows: 250,
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
      VLOFERTA: number;
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
      vlOferta: row.VLOFERTA,
    }));
  } finally {
    await connection.close();
  }
};
