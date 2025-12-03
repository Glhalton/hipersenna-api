import { prisma } from "../lib/prisma.js";
import {
  CreateRaffleClient,
  GetRaffleClient,
} from "../schemas/raffleClients.schemas.js";

export const createRaffleClients = async ({ name, cpf }: CreateRaffleClient) => {
  return await prisma.hsraffle_clients.create({
    data: {
      name,
      cpf,
    },
  });
};

export const getRaffleClients = async ({ id, cpf }: GetRaffleClient) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (cpf) whereClause.cpf = cpf;

  return await prisma.hsraffle_clients.findMany({
    where: whereClause,
  });
};
