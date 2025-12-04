import { prisma } from "../lib/prisma.js";
import {
  CreateRaffleClient,
  GetRaffleClient,
  UpdateRaffleClient,
} from "../schemas/raffleClients.schemas.js";

export const getRaffleClientsService = async ({ id, cpf }: GetRaffleClient) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (cpf) whereClause.cpf = cpf;

  return await prisma.hsraffle_clients.findMany({
    where: whereClause,
  });
};

export const createRaffleClientsService = async ({
  name,
  cpf,
  telephone,
}: CreateRaffleClient) => {
  return await prisma.hsraffle_clients.create({
    data: {
      name,
      cpf,
      telephone,
    },
  });
};

export const updateRaffleClientsService = async (
  { name, cpf, telephone }: UpdateRaffleClient,
  id: number
) => {
  return await prisma.hsraffle_clients.update({
    where: { id },
    data: {
      name,
      cpf,
      telephone,
    },
  });
};

export const deleteRaffleClientsService = async (id: number) => {
  return await prisma.hsraffle_clients.delete({
    where: { id },
  });
};
