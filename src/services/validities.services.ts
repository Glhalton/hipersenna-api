import { prisma } from "../lib/prisma.js";
import {
  updateValidityInput,
  createValidityInput,
  getValidityInput,
} from "../schemas/validities.schemas.js";
import { getOracleConnection } from "../lib/oracleClient.js";
import oracledb from "oracledb";

export const getValidityService = async ({
  id,
  branch_id,
  created_at,
  expiresDays,
  finalDate,
  initialDate,
  descricao,
}: getValidityInput) => {
  if (expiresDays && (initialDate || finalDate)) {
    return "Você deve usar apenas 'expiresDays' ou 'initialDate/finalDate', não ambos";
  }

  let codigosFiltrados: string[] | undefined;
  const whereClause: any = {};

  if (descricao) {
    const connection = await getOracleConnection();
    const query = `
            SELECT codprod
            FROM pcprodut
            WHERE descricao LIKE :descricao
        `;

    const result = await connection.execute(
      query,
      { descricao: `%${descricao.toUpperCase()}%` },
      {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      }
    );

    codigosFiltrados = (result.rows || []).map((row: any) => row.CODPROD);

    await connection.close();

    if (codigosFiltrados.length === 0) return [];
  }

  if (codigosFiltrados) {
    whereClause.hsvalidity_products = {
      some: {
        product_cod: { in: codigosFiltrados },
      },
    };
  }
  if (id) whereClause.id = id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (created_at) {
    const dayStart = new Date(created_at);
    dayStart.setHours(0, 0, 0, 0);

    const dayEnd = new Date(created_at);
    dayEnd.setHours(23, 59, 59, 999);

    whereClause.created_at = { gte: dayStart, lte: dayEnd };
  }

  if (expiresDays || (initialDate && finalDate)) {
    const computedInitialDate = initialDate
      ? new Date(initialDate)
      : expiresDays
      ? new Date()
      : undefined;

    const computedFinalDate = finalDate
      ? new Date(finalDate)
      : expiresDays && computedInitialDate
      ? new Date(
          computedInitialDate.getTime() + expiresDays * 24 * 60 * 60 * 1000
        )
      : undefined;

    if (computedInitialDate && computedFinalDate) {
      whereClause.hsvalidity_products = {
        ...whereClause.hsvalidity_products,
        some: {
          ...(whereClause.hsvalidity_products?.some || {}),
          validity_date: {
            gte: computedInitialDate,
            lte: computedFinalDate,
          },
        },
      };
    }
  }

  const postgreData = await prisma.hsvalidities.findMany({
    where: whereClause,
    include: {
      hsvalidity_products: true,
    },
  });

  const allCodes = postgreData.flatMap((req) =>
    req.hsvalidity_products.map((p) => p.product_cod)
  );

  if (allCodes.length === 0) return postgreData;

  const connection = await getOracleConnection();

  const query = `
            SELECT codprod, descricao
            FROM pcprodut
            WHERE codprod IN (${allCodes.map(() => ":code").join(",")})
        `;

  const result = await connection.execute(query, allCodes, {
    outFormat: oracledb.OUT_FORMAT_OBJECT,
  });

  await connection.close();

  const descricaoMap: Record<string, string> = {};
  (result.rows || []).forEach((row: any) => {
    descricaoMap[row.CODPROD] = row.DESCRICAO;
  });

  const enrichedData = postgreData.map((req) => ({
    ...req,
    hsvalidity_products: req.hsvalidity_products.map((prod) => ({
      ...prod,
      description: descricaoMap[prod.product_cod] || null,
    })),
  }));

  return enrichedData;
};


export const createValidityService = async (
  validityData: createValidityInput,
  userId: number
) => {
  return await prisma.hsvalidities.create({
    data: {
      branch_id: validityData.branch_id,
      request_id: validityData.request_id ?? null,
      employee_id: userId,
      hsvalidity_products: {
        create: validityData.products.map((p) => ({
          product_cod: p.product_cod,
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

export const listValiditiesByEmployeeIdService = async (employeeId: number) => {
  const postgreData = await prisma.hsvalidities.findMany({
    where: {
      employee_id: employeeId,
    },
    include: {
      hsvalidity_products: true,
    },
  });

  if (postgreData.length > 0) {
    const allCodes = postgreData.flatMap((req) =>
      req.hsvalidity_products.map((p) => p.product_cod)
    );

    if (allCodes.length > 0) {
      const connection = await getOracleConnection();
      const query = `
        SELECT codprod, descricao
        FROM pcprodut
        WHERE codprod IN (${allCodes.map((_, i) => `:code${i}`).join(",")})
      `;

      const binds: any = {};
      allCodes.forEach((c, i) => (binds[`code${i}`] = c));

      const result = await connection.execute(query, binds, {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });

      await connection.close();

      const descricaoMap: Record<string, string> = {};
      (result.rows || []).forEach((row: any) => {
        descricaoMap[row.CODPROD] = row.DESCRICAO;
      });

      return postgreData.map((req) => ({
        ...req,
        hsvalidity_products: req.hsvalidity_products.map((prod) => ({
          ...prod,
          description: descricaoMap[prod.product_cod] || null,
        })),
      }));
    }
  }

  return postgreData;
};

export const updateValidityService = async (data: updateValidityInput) => {
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

  return { totalUpdated };
};
