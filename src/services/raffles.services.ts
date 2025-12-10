import { getOracleConnection } from "../lib/oracleClient.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateRaffle,
  DrawRaffles,
  GetNfcData,
  getNfcDataSchema,
  GetRaffle,
  nfcDataResponse,
  UpdateRaffle,
} from "../schemas/raffles.schemas.js";
import oracledb from "oracledb";
import {
  createRaffleClientsService,
  getRaffleClientsService,
} from "./raffleClients.services.js";
import crypto from "crypto";
import { RaffleClientResponse } from "../schemas/raffleClients.schemas.js";

export const getRafflesService = async ({
  id,
  branch_id,
  client_id,
  nfc_key,
  cpf,
}: GetRaffle) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (client_id) whereClause.client_id = client_id;
  if (nfc_key) whereClause.nfc_key = nfc_key;
  if (cpf) {
    whereClause.hsraffle_clients = {
      cpf: cpf,
    };
  }

  return await prisma.hsraffles.findMany({
    where: whereClause,
    include: {
      hsraffle_clients: true,
    },
  });
};

export const createRaffleService = async (
  { chaveNfe, codFilial, vlTotal }: nfcDataResponse,
  { id }: RaffleClientResponse
) => {
  const riffles: any = [];

  const raffleUnits = Math.floor(vlTotal / 50);

  if (raffleUnits === 0) {
    throw new Error(
      "Valor do cupom não atingiu o valor mínimo para participar do sorteio."
    );
  }

  const rafflesCount = await prisma.hsraffles.count({
    where: { nfc_key: chaveNfe },
  });

  if (rafflesCount >= raffleUnits) {
    throw new Error("Já existem rifas cadastradas para esse cupom");
  }

  await prisma.$transaction(async (tx) => {
    for (let i = 0; i < raffleUnits; i++) {
      const raffle = await tx.hsraffles.create({
        data: {
          client_id: id,
          nfc_key: chaveNfe,
          branch_id: Number(codFilial),
        },
      });

      const raffle_number = createHash(raffle.id);

      const updated = await tx.hsraffles.update({
        where: { id: raffle.id },
        data: { raffle_number },
      });

      riffles.push(updated);
    }
  });

  return riffles;
};

export const drawRafflesService = async ({ branch_id }: DrawRaffles) => {
  const data = await prisma.hsraffles.findMany({
    where: { branch_id, status: "ATIVO" },
  });

  if (data.length === 0) {
    throw new Error("Nenhuma rifa para ser sorteada.");
  }

  const raffles = [...data];

  const drawnRaffle = raffles[Math.floor(Math.random() * raffles.length)];

  const updatedDrawnRaffle = await prisma.hsraffles.update({
    where: { id: drawnRaffle.id },
    data: {
      status: "SORTEADO",
    },
  });

  return updatedDrawnRaffle;
};

export const invalidateRafflesService = async ({ branch_id }: DrawRaffles) => {
  const updatedRaffles = await prisma.hsraffles.updateMany({
    where: { branch_id, status: "ATIVO" },
    data: { status: "INATIVO" },
  });

  if (updatedRaffles.count === 0) {
    throw new Error("Nenhuma rifa ativa encontrada.");
  }

  return updatedRaffles;
};

export const getNfcDataService = async ({
  nfc_key,
  nfc_number,
  nfc_serie,
}: GetNfcData) => {
  const connection = await getOracleConnection();

  try {
    const conditions: string[] = [];
    const binds: Record<string, any> = {};

    if (nfc_key) {
      conditions.push("chavenfe = :nfc_key");
      binds.nfc_key = nfc_key;
    }

    if (nfc_number) {
      conditions.push("numnota = :nfc_number");
      binds.nfc_number = Number(nfc_number);
    }

    if (nfc_serie) {
      conditions.push("serie = :nfc_serie");
      binds.nfc_serie = Number(nfc_serie);
    }

    if (conditions.length === 0) {
      throw new Error("Nenhuma condição de consulta encontrado para NF");
    } else if (!nfc_key && conditions.length === 1) {
      throw new Error(
        "É necessário informar a chave da nfc ou informar o número da nfc e a série da nfc"
      );
    }

    const whereClause =
      conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const query = `
        SELECT
            codfilial,
            cgc,
            chavenfe,
            vltotal
        FROM pcnfsaid
        ${whereClause}
    `;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
      maxRows: 250,
    });

    type nfcData = {
      CODFILIAL: number;
      CGC: string;
      CHAVENFE: string;
      VLTOTAL: number;
    };

    return ((result.rows as nfcData[]) ?? []).map((row) => ({
      codFilial: row.CODFILIAL,
      cpf: row.CGC.replace(/\D/g, ""),
      chaveNfe: row.CHAVENFE,
      vlTotal: row.VLTOTAL,
    }));
  } finally {
    await connection.close();
  }
};

const createHash = (id: number) => {
  const hash = crypto.createHash("sha256").update(id.toString()).digest("hex");
  return hash.substring(0, 8).toUpperCase();
};
