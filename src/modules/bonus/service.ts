import oracledb from "oracledb";
import { BonusQuery } from "./schema";

export async function listBonus({ query }: {query: BonusQuery}) {
  let baseQuery = `
    SELECT
      bc.CODFILIAL AS filial,
      p.CODEPTO AS dpart,
      bi.CODPROD AS codprod,
      p.DESCRICAO AS descricao,
      bi.QTENTRADA AS qtentrada,
      TO_CHAR(bc.DATABONUS, 'DD/MM/YYYY') AS dtbonus,
      TO_CHAR(bi.DTVALIDADE, 'DD/MM/YYYY') AS dtvalidade,
      ((NVL(pcest1.qtvendmes1, 0) + NVL(pcest1.qtvendmes2, 0) + NVL(pcest1.qtvendmes3, 0)) / 3) AS mediaf1,
      ((NVL(pcest2.qtvendmes1, 0) + NVL(pcest2.qtvendmes2, 0) + NVL(pcest2.qtvendmes3, 0)) / 3) AS mediaf2,
      ((NVL(pcest3.qtvendmes1, 0) + NVL(pcest3.qtvendmes2, 0) + NVL(pcest3.qtvendmes3, 0)) / 3) AS mediaf3,
      ((NVL(pcest4.qtvendmes1, 0) + NVL(pcest4.qtvendmes2, 0) + NVL(pcest4.qtvendmes3, 0)) / 3) AS mediaf4,
      ((NVL(pcest5.qtvendmes1, 0) + NVL(pcest5.qtvendmes2, 0) + NVL(pcest5.qtvendmes3, 0)) / 3) AS mediaf5,
      ((NVL(pcest7.qtvendmes1, 0) + NVL(pcest7.qtvendmes2, 0) + NVL(pcest7.qtvendmes3, 0)) / 3) AS mediaf7
    FROM pcbonusi bi
    JOIN pcbonusc bc ON bc.NUMBONUS = bi.numbonus
    JOIN pcprodut p ON p.CODPROD= bi.codprod
    LEFT JOIN pcest pcest1 ON pcest1.codfilial = 1 AND pcest1.codprod = bi.codprod
    LEFT JOIN pcest pcest2 ON pcest2.codfilial = 2 AND pcest2.codprod = bi.codprod
    LEFT JOIN pcest pcest3 ON pcest3.codfilial = 3 AND pcest3.codprod = bi.codprod
    LEFT JOIN pcest pcest4 ON pcest4.codfilial = 4 AND pcest4.codprod = bi.codprod
    LEFT JOIN pcest pcest5 ON pcest5.codfilial = 5 AND pcest5.codprod = bi.codprod
    LEFT JOIN pcest pcest7 ON pcest7.codfilial = 7 AND pcest7.codprod = bi.codprod
    WHERE bi.DTVALIDADE BETWEEN SYSDATE - 30 AND SYSDATE + 50
  `;

  let filters: string[] = [];
  let bindParams: any = {};

  if (query.codprod) {
    filters.push("bi.codprod = :codprod");
    bindParams.codprod = query.codprod;
  }
  if (query.dtbonusstart && query.dtbonusend) {
    filters.push("bc.databonus BETWEEN TO_DATE(:dtbonusstart, 'YYYY-MM-DD') AND TO_DATE(:dtbonusend, 'YYYY-MM-DD')");
    bindParams.dtbonusstart = query.dtbonusstart;
    bindParams.dtbonusend = query.dtbonusend;
  }
  if (query.dtvalidstart && query.dtvalidend) {
    filters.push("bi.dtvalidade BETWEEN TO_DATE(:dtvalidstart, 'YYYY-MM-DD') AND TO_DATE(:dtvalidend, 'YYYY-MM-DD')");
    bindParams.dtvalidstart = query.dtvalidstart;
    bindParams.dtvalidend = query.dtvalidend;
  }
  if (query.filial) {
    filters.push("bc.codfilial = :filial");
    bindParams.filial = query.filial;
  }
  if (query.dpart) {
    filters.push("p.codepto = :dpart");
    bindParams.dpart = query.dpart;
  }

  if (filters.length > 0) {
    baseQuery += " AND " + filters.join(" AND ");
  }

  let finalQuery = baseQuery + " ORDER BY bi.dtvalidade ASC";

  let connection;

  try {
    if (process.env.ORACLE_CLIENT_DIR) {
      oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_DIR });
    }

    connection = await oracledb.getConnection({
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      connectionString: process.env.CONNECTION_STRING,
    });
    
    const result = await connection.execute(finalQuery, bindParams, {
      maxRows: 5000,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    return {
      status: 200,
      body: result.rows,
    };
  } catch (err: any) {
    console.error(err);
    return {
      status: 400,
      body: err,
    };
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err: any) {
        console.error(err);
      }
    }
  }
}
