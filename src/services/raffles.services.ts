import { getOracleConnection } from "../lib/oracleClient.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateRaffle,
  DrawRaffles,
  GetRaffle,
  UpdateRaffle,
} from "../schemas/raffles.schemas.js";
import oracledb from "oracledb";
import {
  createRaffleClientsService,
  getRaffleClientsService,
} from "./raffleClients.services.js";
import crypto from "crypto";

export const getRafflesService = async ({
  id,
  branch_id,
  client_id,
  nfc_key,
}: GetRaffle) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (branch_id) whereClause.branch_id = branch_id;
  if (client_id) whereClause.client_id = client_id;
  if (nfc_key) whereClause.nfc_key = nfc_key;

  return await prisma.hsraffles.findMany({
    where: whereClause,
  });
};

export const createRaffleService = async ({ nfc_key }: CreateRaffle) => {
  const riffles: any = [];

  const nfcData = await getNfcData(nfc_key);

  if (!nfcData || nfcData.length === 0) {
    throw new Error("Cupom não encontrado");
  }

  const raffleUnits = Math.floor(nfcData[0].vlTotal / 50);

  if (raffleUnits === 0) {
    throw new Error(
      "Valor do cupom não atingiu o valor mínimo para participar do sorteio."
    );
  }

  const rafflesCount = await prisma.hsraffles.count({
    where: { nfc_key },
  });

  if (rafflesCount >= raffleUnits) {
    throw new Error("Já existem rifas cadastradas para esse cupom");
  }

  const cpf = nfcData[0].cpf;

  if (cpf == "11111111111" || null) {
    throw new Error("CPF não encontrado no cupom fiscal.");
  }

  const client = await getRaffleClientsService({ cpf });

  if (client.length === 0) {
    throw new Error("Cliente não encontrado no sistema");
  }

  // const client_id = await getOrCreateClient(cpf, name);

  await prisma.$transaction(async (tx) => {
    for (let i = 0; i < raffleUnits; i++) {
      const raffle = await tx.hsraffles.create({
        data: {
          client_id: client[0].id,
          nfc_key,
          branch_id: Number(nfcData[0].codFilial),
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

const getNfcData = async (nfc_key: string) => {
  const connection = await getOracleConnection();

  try {
    const binds = { nfc_key };

    const query = `
        SELECT
            codfilial,
            cgc,
            numnota,
            vltotal
        FROM pcnfsaid
        WHERE chavenfe = :nfc_key
    `;

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    type nfcData = {
      CODFILIAL: number;
      CGC: string;
      NUMNOTA: number;
      VLTOTAL: number;
    };

    return ((result.rows as nfcData[]) ?? []).map((row) => ({
      codFilial: row.CODFILIAL,
      cpf: row.CGC.replace(/\D/g, ""),
      numNota: row.NUMNOTA,
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
