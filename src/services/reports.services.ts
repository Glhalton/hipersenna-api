import { getOracleConnection } from "../lib/oracleClient.js";
import oracledb from "oracledb";
import { GetDamageReport, GetSalesReport } from "../schemas/reports.schemas.js";
import { getGoalRecordsService } from "./goalRecords.services.js";
import { prisma } from "../lib/prisma.js";

export const getDamageReportService = async ({
  branchId,
  departmentId,
  monthYear,
}: GetDamageReport) => {
  const connection = await getOracleConnection();
  try {
    const conditions: string[] = [];
    const binds: Record<string, any> = {};

    if (branchId) {
      conditions.push("pa.codfilial = :branchId");
      binds.branchId = Number(branchId);
    }

    if (departmentId) {
      conditions.push("p.codepto = :departmentId");
      binds.departmentId = Number(departmentId);
    }

    conditions.push(`
      pa.data >= TRUNC(:monthYear, 'MM')
      AND pa.data < ADD_MONTHS(TRUNC(:monthYear, 'MM'), 1)
    `);
    binds.monthYear = new Date(monthYear);

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `
        SELECT 
            pa.codfilial,
            p.codepto AS departamento,
            SUM(pa.qt * es.custofin) AS vltotaldepart
        FROM pcprodavaria pa
        JOIN pcprodut p 
            ON p.codprod = pa.codprod
        JOIN pcest es 
            ON es.codprod = pa.codprod
        AND es.codfilial = pa.codfilial
        ${whereClause}
        GROUP BY p.codepto, pa.codfilial
        ORDER BY p.codepto
        `;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      maxRows: 250,
    });

    const departments = await prisma.hsdepartments.findMany();

    const departmentIdToWinthorMap = new Map<number, number>();
    const departmentNameMap = new Map<number, string>();

    departments.forEach((dep) => {
      departmentIdToWinthorMap.set(dep.id, dep.winthor_id);
      departmentNameMap.set(dep.winthor_id, dep.description);
    });
    type ProductRow = {
      CODFILIAL: number;
      DEPARTAMENTO: number;
      VLTOTALDEPART: number;
    };

    const data = await getGoalRecordsService({
      branch_id: branchId,
      type: "AVARIA",
      goal_month: new Date(monthYear),
    });

    const goalsMap = new Map<number, number>();

    data.forEach((goal) => {
      const winthorDepartmentId = departmentIdToWinthorMap.get(goal.department);

      if (winthorDepartmentId) {
        goalsMap.set(winthorDepartmentId, goal.goal_value);
      }
    });

    const winthorData = ((result.rows as ProductRow[]) ?? []).map((row) => {
      const departmentId = Number(row.DEPARTAMENTO);

      return {
        branchId: Number(row.CODFILIAL),
        departmentId,
        totalValue: Number(row.VLTOTALDEPART),
        goalValue: goalsMap.get(departmentId) ?? null,
        departmentName: departmentNameMap.get(departmentId) ?? null,
      };
    });

    return winthorData;
  } finally {
    await connection.close();
  }
};

export const getSalesReportService = async ({
  branchId,
  departmentId,
  monthYear,
}: GetSalesReport) => {
  const connection = await getOracleConnection();
  try {
    const conditions: string[] = [];
    const binds: Record<string, any> = {};

    if (branchId) {
      conditions.push("pc.codfilial = :branchId");
      binds.branchId = Number(branchId);
    }

    if (departmentId) {
      conditions.push("p.codepto = :departmentId");
      binds.departmentId = Number(departmentId);
    }

    conditions.push(`
      pc.data >= TRUNC(:monthYear, 'MM')
      AND pc.data < ADD_MONTHS(TRUNC(:monthYear, 'MM'), 1)
    `);
    binds.monthYear = new Date(monthYear);

    conditions.push("pc.DTCANCEL IS NULL");
    conditions.push("pc.CONDVENDA NOT IN (4, 8, 10, 13, 20, 98, 99)");

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `
      WITH vendas_agrupadas AS (
        SELECT 
            pc.CODFILIAL,
            p.CODEPTO,
            ROUND(SUM(
                CASE 
                    WHEN NVL(pi.BONIFIC,'N') = 'N'
                    AND pc.CONDVENDA NOT IN (5,6,11,12)
                    THEN
                        (
                          COALESCE(pi.VLSUBTOTITEM,
                            CASE 
                              WHEN NVL(pi.TRUNCARITEM,'N') = 'N'
                              THEN pi.QT * pi.PVENDA
                              ELSE TRUNC(pi.QT * pi.PVENDA,2)
                            END
                          )
                        )
                    ELSE 0
                END
            ),2) AS VALOR
        FROM PCPEDC pc
        JOIN PCPEDI pi ON pi.NUMPED = pc.NUMPED
        JOIN PCPRODUT p ON pi.CODPROD = p.CODPROD
${whereClause}
        GROUP BY pc.CODFILIAL, p.CODEPTO
      )
      SELECT
        v.CODFILIAL,
        v.CODEPTO,
        v.VALOR,
        SUM(m.VLVENDAPREV) AS VALORMETA
      FROM vendas_agrupadas v
      LEFT JOIN  pcmetadepto m
      ON v.CODFILIAL = m.CODFILIAL
      AND v.CODEPTO = m.CODEPTO
      AND m.data >= TRUNC(:monthYear, 'MM')
      AND m.data < ADD_MONTHS(TRUNC(:monthYear, 'MM'), 1)
      GROUP BY v.CODFILIAL, v.CODEPTO, v.VALOR
      ORDER BY v.codepto
    `;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      maxRows: 250,
    });

    type ProductRow = {
      CODFILIAL: number;
      CODEPTO: number;
      VALOR: number;
      VALORMETA: number;
    };

    const departments = await prisma.hsdepartments.findMany({});
    const departmentMap = new Map(
      departments.map((dep) => [dep.winthor_id, dep.description]),
    );

    const winthorData = ((result.rows as ProductRow[]) ?? []).map((row) => ({
      branchId: row.CODFILIAL,
      departmentId: row.CODEPTO,
      totalValue: row.VALOR,
      goalValue: row.VALORMETA,
    }));

    return winthorData.map((item) => ({
      ...item,
      departmentName: departmentMap.get(item.departmentId) ?? null,
    }));
  } finally {
    await connection.close();
  }
};
