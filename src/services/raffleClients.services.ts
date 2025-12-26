import { BadRequest } from "../errors/badRequest.error.js";
import { Conflict } from "../errors/conflict.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { prisma } from "../lib/prisma.js";
import {
  CreateRaffleClient,
  GetRaffleClient,
  UpdateRaffleClient,
} from "../schemas/raffleClients.schemas.js";

export const getRaffleClientsService = async ({ id, cpf }: GetRaffleClient) => {
  const whereClause: any = {};

  if (id) whereClause.id = id;
  if (cpf) whereClause.cpf = cpf.replace(/\D/g, "");

  return await prisma.hsraffle_clients.findMany({
    where: whereClause,
  });
};

export const createRaffleClientsService = async ({
  name,
  cpf,
  telephone,
}: CreateRaffleClient) => {
  const cpfClear = cpf.replace(/\D/g, "");

  const cpfExist = validateCpf(cpfClear);

  if (!cpfExist) {
    throw new BadRequest("O CPF informado é inválido.");
  }

  try {
    return await prisma.hsraffle_clients.create({
      data: {
        name,
        cpf: cpfClear,
        telephone,
      },
    });
  } catch (error: any) {
    if (error.code == "P2002") {
      throw new Conflict(
        "Já existe um usuário com esse CPF cadastrado no sistema"
      );
      throw error;
    }
  }
};

export const updateRaffleClientsService = async (
  { name, cpf, telephone }: UpdateRaffleClient,
  id: number
) => {
  try {
    return await prisma.hsraffle_clients.update({
      where: { id },
      data: {
        name,
        cpf,
        telephone,
      },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Cliente da rifa não encontrado!");
    }
    throw error;
  }
};

export const deleteRaffleClientsService = async (id: number) => {
  try {
    return await prisma.hsraffle_clients.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      throw new NotFound("Cliente da rifa não encontrado!");
    }
    throw error;
  }
};

export function validateCpf(cpf: string) {
  if (!cpf) return false;

  const cpfLimpo = cpf.replace(/\D/g, "");

  if (cpfLimpo.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;

  const calcularDigito = (cpfBase: string, pesoInicial: number): number => {
    let soma = 0;
    for (let i = 0; i < cpfBase.length; i++) {
      soma += Number(cpfBase[i]) * (pesoInicial - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const digito1 = calcularDigito(cpfLimpo.substring(0, 9), 10);

  const digito2 = calcularDigito(cpfLimpo.substring(0, 9) + digito1, 11);

  return digito1 === Number(cpfLimpo[9]) && digito2 === Number(cpfLimpo[10]);
}
