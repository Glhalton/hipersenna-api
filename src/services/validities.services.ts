import { prisma } from "../lib/prisma.js";
import { Prisma } from "@prisma/client";
import {
  UpdateValidity,
  CreateValidity,
  GetValidity,
  GetMyValidities,
} from "../schemas/validities.schemas.js";
import { getOracleConnection } from "../lib/oracleClient.js";
import oracledb from "oracledb";

export const getValidityService = async ({
  id,
  branch_id,
  initialCreationDate,
  finalCreationDate,
  initialValidityDate,
  finalValidityDate,
  expiresDays,
  descricao,
}: GetValidity) => {
  const connection = await getOracleConnection();

  try {
    let codigosFiltrados: string[] | undefined;

    if (descricao) {
      codigosFiltrados = await getProductCodesByDescription(descricao);
      if (codigosFiltrados.length === 0) return [];
    }

    const whereClause = buildHsvaliditiesWhereClause({
      ...{
        id,
        branch_id,
        initialCreationDate,
        finalCreationDate,
        initialValidityDate,
        finalValidityDate,
        expiresDays,
        descricao,
      },
      codigosFiltrados,
    });

    const postgreData = await prisma.hsvalidities.findMany({
      where: whereClause,
      include: {
        hsvalidity_products: true,
      },
    });

    if (postgreData.length === 0) {
      return [];
    }

    const allCodes = postgreData.flatMap((req) =>
      req.hsvalidity_products.map((p) => p.product_code)
    );

    const oracleProducts = await getOracleProductDetails(allCodes);

    const response = mapValidityResponse(postgreData, oracleProducts);

    return response;
  } catch (error: unknown) {
    throw error;
  } finally {
    await connection.close();
  }
};

export const getMyValiditiesService = async (
  { orderBy }: GetMyValidities,
  employeeId: number
) => {
  const postgreData = await prisma.hsvalidities.findMany({
    where: {
      employee_id: employeeId,
    },
    include: {
      hsvalidity_products: true,
    },
    orderBy: {
      created_at: orderBy,
    },
  });

  const allCodes = postgreData.flatMap((req) =>
    req.hsvalidity_products.map((p) => p.product_code)
  );

  const oracleProducts = await getOracleProductDetails(allCodes);

  const response = mapValidityResponse(postgreData, oracleProducts);

  return response;
};

export const createValidityService = async (
  validityData: CreateValidity,
  userId: number
) => {
  return await prisma.hsvalidities.create({
    data: {
      branch_id: validityData.branch_id,
      request_id: validityData.request_id ?? null,
      employee_id: userId,
      hsvalidity_products: {
        create: validityData.products.map((p) => ({
          product_code: p.product_code,
          auxiliary_code: p.auxiliary_code,
          quantity: p.quantity,
          validity_date: p.validity_date,
        })),
      },
    },
    include: {
      hsvalidity_products: true,
    },
  });
};

export const createValidityFromRequestService = async (
  validityData: CreateValidity,
  validityRequestId: number,
  userId: number
) => {};

export const updateValidityService = async (data: UpdateValidity) => {
  const updates = data.flatMap((validity) =>
    validity.products.map((product) =>
      prisma.hsvalidity_products.updateMany({
        where: {
          validity_id: validity.validity_id,
          id: product.product_id,
        },
        data: {
          treat_id: product.treat_id,
        },
      })
    )
  );

  const results = await Promise.all(updates);

  const totalUpdated = results.reduce((acc, r) => acc + r.count, 0);
  ("");

  return { totalUpdated };
};

const getProductCodesByDescription = async (description: string) => {
  const connection = await getOracleConnection();
  try {
    const query = `
               SELECT codprod
               FROM pcprodut
               WHERE descricao LIKE :descricao
           `;

    const result = await connection.execute(
      query,
      { descricao: `%${description.toUpperCase()}%` },
      {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );

    return (result.rows || []).map((row: any) => row.CODPROD);
  } finally {
    await connection.close();
  }
};

export const getOracleProductDetailsService = async (codes: string[]) => {
  if (codes.length === 0) return {};

  const connection = await getOracleConnection();

  try {
    const binds = codes.reduce((acc, code, i) => {
      acc[`code${i}`] = code;
      return acc;
    }, {} as Record<string, string>);

    const inClause = Object.keys(binds)
      .map((k) => `:${k}`)
      .join(",");

    const query = `
      SELECT codprod, descricao
      FROM pcprodut
      WHERE codpro IN (${inClause})
    `;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      maxRows: 250,
    });

    const descricaoMap: Record<string, string> = {};
    ((result.rows as { CODPROD: string; DESCRICAO: string }[]) || []).forEach(
      (row) => {
        descricaoMap[row.CODPROD] = row.DESCRICAO;
      }
    );

    return descricaoMap;
  } finally {
    await connection.close();
  }
};

const buildHsvaliditiesWhereClause = ({
  id,
  branch_id,
  initialCreationDate,
  finalCreationDate,
  initialValidityDate,
  finalValidityDate,
  expiresDays,
  codigosFiltrados,
}: {
  id?: number;
  branch_id?: number;
  initialCreationDate?: Date;
  finalCreationDate?: Date;
  initialValidityDate?: Date;
  finalValidityDate?: Date;
  expiresDays?: number;
  codigosFiltrados?: string[];
}) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (branch_id) whereClause.branch_id = branch_id;

  if (initialCreationDate && finalCreationDate) {
    whereClause.created_at = {
      gte: initialCreationDate,
      lte: finalCreationDate,
    };
  }

  if (codigosFiltrados && codigosFiltrados.length > 0) {
    whereClause.hsvalidity_products = {
      some: {
        product_code: { in: codigosFiltrados },
      },
    };
  }

  if (expiresDays || (initialValidityDate && finalValidityDate)) {
    const start = initialValidityDate
      ? new Date(initialValidityDate)
      : expiresDays
      ? new Date()
      : undefined;

    const end = finalValidityDate
      ? new Date(finalValidityDate)
      : expiresDays && start
      ? new Date(start.getTime() + expiresDays * 24 * 60 * 60 * 1000)
      : undefined;

    if (start && end) {
      whereClause.hsvalidity_products = {
        ...whereClause.hsvalidity_products,
        some: {
          ...(whereClause.hsvalidity_products?.some || {}),
          validity_date: { gte: start, lte: end },
        },
      };
    }
  }

  return whereClause;
};

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

export const getOracleProductDetails = async (
  codes: number[]
): Promise<Record<number, OracleProductDetail>> => {
  if (codes.length === 0) return {};

  const connection = await getOracleConnection();

  try {
    // bind seguro para IN (...)
    const binds = codes.reduce((acc, code, index) => {
      acc[`code${index}`] = code;
      return acc;
    }, {} as Record<string, number>);

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

    const map: Record<string, OracleProductDetail> = {};
    ((result.rows as OracleProductDetail[]) || []).forEach((row) => {
      map[row.CODPROD] = row;
    });

    return map;
  } finally {
    await connection.close();
  }
};

const mapValidityResponse = (
  data: any[],
  oracleMap: Record<number, OracleProductDetail>
) => {
  return data.map((validity) => ({
    id: validity.id,
    branch_id: validity.branch_id,
    employee_id: validity.employee_id,
    status: validity.status,
    request_id: validity.request_id ?? null,
    created_at: validity.created_at,
    modified_at: validity.modified_at,

    hsvalidity_products: validity.hsvalidity_products.map(
      (product: HsvalidityProduct) => {
        const oracle = oracleMap[product.product_code];

        return {
          id: product.id,
          validity_id: product.validity_id,
          product_code: product.product_code,
          quantity: product.quantity,
          validity_date: product.validity_date,
          treat_id: product.treat_id,
          auxiliary_code: product.auxiliary_code,

          // Oracle
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
      }
    ),
  }));
};
