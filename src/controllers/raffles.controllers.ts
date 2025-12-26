import { FastifyRequest, FastifyReply } from "fastify";
import {
  createRaffleSchema,
  drawRafflesSchema,
  getMyRaffleSchema,
  getRaffleSchema,
} from "../schemas/raffles.schemas.js";
import {
  createRaffleService,
  drawRafflesService,
  getMyRafflesService,
  getNfcDataService,
  getRafflesService,
  invalidateRafflesService,
} from "../services/raffles.services.js";
import {
  getRaffleClientsService,
  validateCpf,
} from "../services/raffleClients.services.js";

export async function getRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id, branch_id, client_id, nfc_key, cpf, status } =
    getRaffleSchema.parse(request.query);

  const raffles = await getRafflesService({
    id,
    branch_id,
    client_id,
    nfc_key,
    cpf,
    status,
  });

  return reply.status(200).send(raffles);
}

export async function getMyRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { cpf } = getMyRaffleSchema.parse(request.query);

  const raffles = await getMyRafflesService(cpf);

  return reply.status(200).send(raffles);
}

export async function createRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { nfc_key, nfc_number, nfc_serie, cpf } = createRaffleSchema.parse(
    request.body
  );

  const rafflesCreateds = await createRaffleService({
    nfc_key,
    nfc_number,
    nfc_serie,
    cpf,
  });

  return reply.status(201).send(rafflesCreateds);
}

export async function drawRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { branch_id } = drawRafflesSchema.parse(request.params);

  const winner = await drawRafflesService({ branch_id });

  return reply.status(200).send(winner);
}

export async function invalidateRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { branch_id } = drawRafflesSchema.parse(request.params);

  const count = await invalidateRafflesService({ branch_id });

  return reply.status(200).send({
    message: `Rifas da filial ${branch_id} invalidadas com sucesso!`,
  });
}
