import oracledb from "oracledb";
import { GetBonus } from "../schemas/bonus.schemas.js";
import { getOracleConnection } from "../lib/oracleClient.js";

export async function bonusListService({
  codprod,
  dpart,
  dtbonusend,
  dtbonusstart,
  dtvalidend,
  dtvalidstart,
  filial,
}: GetBonus) {
  const connection = await getOracleConnection();
  try {
    const conditions: string[] = [];
    const binds: Record<string, any> = {};

    if (codprod) {
      conditions.push("bi.codprod = :codprod");
      binds.codprod = Number(codprod);
    }
    if (dtbonusstart && dtbonusend) {
      conditions.push(
        "bc.databonus BETWEEN TO_DATE(:dtbonusstart, 'YYYY-MM-DD') AND TO_DATE(:dtbonusend, 'YYYY-MM-DD')"
      );
      binds.dtbonusstart = dtbonusstart;
      binds.dtbonusend = dtbonusend;
    }
    if (dtvalidstart && dtvalidend) {
      conditions.push(
        "bi.dtvalidade BETWEEN TO_DATE(:dtvalidstart, 'YYYY-MM-DD') AND TO_DATE(:dtvalidend, 'YYYY-MM-DD')"
      );
      binds.dtvalidstart = dtvalidstart;
      binds.dtvalidend = dtvalidend;
    }
    if (filial) {
      conditions.push("bc.codfilial = :filial");
      binds.filial = Number(filial);
    }
    if (dpart) {
      conditions.push("p.codepto = :dpart");
      binds.dpart = Number(dpart);
    }

    conditions.push("bi.DTVALIDADE BETWEEN SYSDATE - 30 AND SYSDATE + 50");

   const whereClause = `WHERE ${conditions.join(" AND ")}`;

    const query = `
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
        ${whereClause} ORDER BY bi.dtvalidade ASC
    `;

    const result = await connection.execute(query, binds, {
      maxRows: 5000,
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

      type DataRow = {
      FILIAL: string;
      DPART: number;
      CODPROD: number;
      DESCRICAO: string;
      QTENTRADA: number;
      DTBONUS: string;
      DTVALIDADE: string;
      MEDIAF1: number;
      MEDIAF2: number;
      MEDIAF3: number;
      MEDIAF4: number;
      MEDIAF5: number;
      MEDIAF7: number;
    };


    return ((result.rows as DataRow[] )?? []).map(row => ({
      filial: row.FILIAL,
      depart: row.DPART,
      codProd: row.CODPROD,
      descricao: row.DESCRICAO,
      qtEntrada: row.QTENTRADA,
      dtBonus: row.DTBONUS,
      dtValidade: row.DTVALIDADE,
      mediaF1: row.MEDIAF1,
      mediaF2: row.MEDIAF2,
      mediaF3: row.MEDIAF3,
      mediaF4: row.MEDIAF4,
      mediaF5: row.MEDIAF5,
      mediaF7: row.MEDIAF7,
    }));

  } catch (error: any){
    console.log(error)
  } finally {
    await connection.close();
  }
}
