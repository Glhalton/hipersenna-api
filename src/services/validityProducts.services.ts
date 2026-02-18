import { getOracleConnection } from "../lib/oracleClient.js";
import { prisma } from "../lib/prisma.js";
import { GetValidityProducts } from "../schemas/validityProducts.schemas.js";
import { getDateRange } from "./date.services.js";
import oracledb from "oracledb";

type OracleProductDetail = {
  CODPROD: string;
  DESCRICAO: string;
  CODEPTO: string;
  CODFORNEC: string;
  FORNECEDOR: string;
  CODCOMPRADOR: string;
  NOME: string;
  MEDIA1: number;
  MEDIA2: number;
  MEDIA3: number;
  MEDIA4: number;
  MEDIA5: number;
  MEDIA7: number;
  MEDIA8: number;
};

type HsvalidityProduct = {
  id: number;
  validity_id: number;
  product_code: number;
  quantity: number;
  validity_date: Date;
  treat_id: number;
  auxiliary_code: string;
};

export const getValidityProductsService = async ({
  branchId,
  expiresDays,
  finalCreationDate,
  finalValidityDate,
  id,
  initialCreationDate,
  initialValidityDate,
  orderBy,
}: GetValidityProducts) => {
  const whereClause = buildGetValidityProductsWhereClause({
    id,
    branchId,
    initialCreationDate,
    finalCreationDate,
    initialValidityDate,
    finalValidityDate,
    expiresDays,
  });

  const products = await prisma.hsvalidity_products.findMany({
    where: whereClause,
    include: {
      hsvalidities: true,
    },
  });

  if (products.length === 0) {
    return [];
  }

  const allCodes = products.flatMap((p) => p.product_code);

  const oracleProducts = await getOracleProductDetails(allCodes);

  const response = mapValidityResponse(products, oracleProducts);

  return response;
};

const buildGetValidityProductsWhereClause = ({
  id,
  branchId,
  initialCreationDate,
  finalCreationDate,
  initialValidityDate,
  finalValidityDate,
  expiresDays,
}: {
  id?: number;
  branchId?: number;
  initialCreationDate?: Date;
  finalCreationDate?: Date;
  initialValidityDate?: Date;
  finalValidityDate?: Date;
  expiresDays?: number;
}) => {
  const whereClause: any = {};

  if (initialValidityDate && finalValidityDate) {
    const { startUTC, endUTC } = getDateRange(
      initialValidityDate,
      finalValidityDate,
    );

    whereClause.validity_date = {
      gte: startUTC,
      lte: endUTC,
    };
  }

  if (expiresDays) {
    const start = new Date();
    const end = new Date(start.getTime() + expiresDays * 24 * 60 * 60 * 1000);

    whereClause.validity_date = {
      gte: start,
      lte: end,
    };
  }

  if (id) {
    whereClause.id = id;
  }

  if (branchId || initialCreationDate || finalCreationDate) {
    whereClause.hsvalidities = {};

    if (branchId) {
      whereClause.hsvalidities.branch_id = branchId;
    }

    if (initialCreationDate && finalCreationDate) {
      whereClause.hsvalidities.created_at = {};

      const { startUTC, endUTC } = getDateRange(
        initialCreationDate,
        finalCreationDate,
      );

      whereClause.hsvalidities.created_at.gte = startUTC;

      whereClause.hsvalidities.created_at.lte = endUTC;
    }
  }

  console.log(whereClause);

  return whereClause;
};

export const getOracleProductDetails = async (
  codes: number[],
): Promise<Record<number, OracleProductDetail>> => {
  if (codes.length === 0) return {};

  const connection = await getOracleConnection();

  try {
    const BATCH_SIZE = 1000;
    const resultMap: Record<string, OracleProductDetail> = {};

    for (let i = 0; i < codes.length; i += BATCH_SIZE) {
      const batch = codes.slice(i, i + BATCH_SIZE);

      const binds = batch.reduce(
        (acc, code, index) => {
          acc[`code${index}`] = code;
          return acc;
        },
        {} as Record<string, number>,
      );

      const inClause = Object.keys(binds)
        .map((key) => `:${key}`)
        .join(",");

      const query = `
        SELECT
          p.codprod,
          p.descricao,
          p.codepto,
          p.codfornec,
          f.fornecedor,
          pf.codcomprador,
          emp.nome,
          ((COALESCE(pcest1.qtvendmes1, 0) + COALESCE(pcest1.qtvendmes2, 0) + COALESCE(pcest1.qtvendmes3, 0)) / 3) AS media1,
          ((COALESCE(pcest2.qtvendmes1, 0) + COALESCE(pcest2.qtvendmes2, 0) + COALESCE(pcest2.qtvendmes3, 0)) / 3) AS media2,
          ((COALESCE(pcest3.qtvendmes1, 0) + COALESCE(pcest3.qtvendmes2, 0) + COALESCE(pcest3.qtvendmes3, 0)) / 3) AS media3,
          ((COALESCE(pcest4.qtvendmes1, 0) + COALESCE(pcest4.qtvendmes2, 0) + COALESCE(pcest4.qtvendmes3, 0)) / 3) AS media4,
          ((COALESCE(pcest5.qtvendmes1, 0) + COALESCE(pcest5.qtvendmes2, 0) + COALESCE(pcest5.qtvendmes3, 0)) / 3) AS media5,
          ((COALESCE(pcest7.qtvendmes1, 0) + COALESCE(pcest7.qtvendmes2, 0) + COALESCE(pcest7.qtvendmes3, 0)) / 3) AS media7,
          ((COALESCE(pcest8.qtvendmes1, 0) + COALESCE(pcest8.qtvendmes2, 0) + COALESCE(pcest8.qtvendmes3, 0)) / 3) AS media8
        FROM pcprodut p
        LEFT JOIN pcest pcest1 ON pcest1.codfilial = 1 AND pcest1.codprod = p.codprod
        LEFT JOIN pcest pcest2 ON pcest2.codfilial = 2 AND pcest2.codprod = p.codprod
        LEFT JOIN pcest pcest3 ON pcest3.codfilial = 3 AND pcest3.codprod = p.codprod
        LEFT JOIN pcest pcest4 ON pcest4.codfilial = 4 AND pcest4.codprod = p.codprod
        LEFT JOIN pcest pcest5 ON pcest5.codfilial = 5 AND pcest5.codprod = p.codprod
        LEFT JOIN pcest pcest7 ON pcest7.codfilial = 7 AND pcest7.codprod = p.codprod
        LEFT JOIN pcest pcest8 ON pcest8.codfilial = 8 AND pcest8.codprod = p.codprod
        LEFT JOIN pcfornec f ON f.codfornec = p.codfornec
        LEFT JOIN pcprodfilial pf ON pf.codprod = p.codprod
        LEFT JOIN pcempr emp ON emp.matricula = pf.codcomprador
        WHERE p.codprod IN (${inClause})
      `;

      const result = await connection.execute(query, binds, {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });

      ((result.rows as OracleProductDetail[]) || []).forEach((row) => {
        resultMap[row.CODPROD] = row;
      });
    }

    return resultMap;
  } finally {
    await connection.close();
  }
};

const mapValidityResponse = (
  data: any[],
  oracleMap: Record<number, OracleProductDetail>,
) => {
  if (!data.length) return [];

  return data.map((item) => {
    const oracle = oracleMap[item.product_code];

    return {
      // ===== Dados da validade =====
      validity_id: item.hsvalidities.id,
      branch_id: item.hsvalidities.branch_id,
      employee_id: item.hsvalidities.employee_id,
      status: item.hsvalidities.status,
      created_at: item.hsvalidities.created_at,
      modified_at: item.hsvalidities.modified_at,

      // ===== Dados do produto =====
      id: item.id,
      product_code: item.product_code,
      quantity: item.quantity,
      validity_date: item.validity_date,
      treat_id: item.treat_id,
      auxiliary_code: item.auxiliary_code,

      // ===== Oracle =====
      description: oracle?.DESCRICAO ?? null,
      department_id: oracle?.CODEPTO ?? 0,
      supplier_id: oracle?.CODFORNEC ?? 0,
      supplier_name: oracle?.FORNECEDOR ?? "",
      buyer_id: oracle?.CODCOMPRADOR ?? 0,
      buyer_name: oracle?.NOME ?? "",
      average1: oracle?.MEDIA1 ?? 0,
      average2: oracle?.MEDIA2 ?? 0,
      average3: oracle?.MEDIA3 ?? 0,
      average4: oracle?.MEDIA4 ?? 0,
      average5: oracle?.MEDIA5 ?? 0,
      average7: oracle?.MEDIA7 ?? 0,
      average8: oracle?.MEDIA8 ?? 0,
    };
  });
};
