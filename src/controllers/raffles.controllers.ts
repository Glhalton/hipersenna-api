import { FastifyRequest, FastifyReply } from "fastify";
import {
  createRaffleSchema,
  drawRafflesSchema,
  getRaffleSchema,
} from "../schemas/raffles.schemas.js";
import {
  createRaffleService,
  drawRafflesService,
  getRafflesService,
  invalidateRafflesService,
} from "../services/raffles.services.js";

export async function getRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, branch_id, client_id, nfc_key } = getRaffleSchema.parse(
      request.query
    );

    const raffles = await getRafflesService({
      id,
      branch_id,
      client_id,
      nfc_key,
    });

    if (raffles.length === 0) {
      return reply.status(404).send({ message: "Rifa não encontrada" });
    }

    return reply.status(200).send(raffles);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { nfc_key } = createRaffleSchema.parse(request.body);

    const rafflesCreateds = await createRaffleService({ nfc_key });

    return reply.status(201).send(rafflesCreateds);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function drawRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { branch_id } = drawRafflesSchema.parse(request.params);

    const winner = await drawRafflesService({ branch_id });

    return reply.status(200).send(winner);
  } catch (error: any) {
    reply.status(400).send({ message: error.message });
  }
}

export async function invalidateRafflesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { branch_id } = drawRafflesSchema.parse(request.params);

    const count = await invalidateRafflesService({ branch_id });

    return reply.status(200).send({
      message: `Rifas da filial ${branch_id} invalidadas com sucesso!`,
    });
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
