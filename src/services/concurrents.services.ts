import { getOracleConnection } from "../lib/oracleClient.js";
import oracledb from "oracledb";
import {
  GetConcurrent,
  OracleConcurrent,
} from "../schemas/concurrents.schemas.js";

export const getConcurrentsService = async ({ id, name }: GetConcurrent) => {
  const connection = await getOracleConnection();

  try {
    const conditions: string[] = [];
    const binds: Record<string, any> = {};

    if (id) {
      conditions.push("codconc = :codconc");
      binds.codconc = id;
    }

    if (name) {
      conditions.push("LOWER(concorrente) LIKE LOWER(:concorrente)");
      binds.concorrente = `%${name}%`;
    }

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `
        SELECT DISTINCT
            codconc,
            concorrente,
            ativo
        FROM pcconcor
        ${whereClause}
    `;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    if (result.rows?.length === 0) {
      return [];
    }

    return ((result.rows as OracleConcurrent[]) ?? []).map((row) => ({
      concurrentCode: row.CODCONC,
      concurrentName: row.CONCORRENTE,
      active: row.ATIVO,
    }));
  } catch (error: unknown) {
    throw error;
  } finally {
    await connection.close();
  }
};
