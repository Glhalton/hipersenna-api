import { FastifyRequest, FastifyReply } from "fastify";
import {
  createRaffleClientsService,
  deleteRaffleClientsService,
  getRaffleClientsService,
  updateRaffleClientsService,
} from "../services/raffleClients.services.js";
import {
  createRaffleClientSchema,
  getRaffleClientSchema,
  raffleClientIdSchema,
  updateRaffleClientSchema,
} from "../schemas/raffleClients.schemas.js";

export async function getRaffleClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id, cpf } = getRaffleClientSchema.parse(request.query);

  const raffles = await getRaffleClientsService({ id, cpf });

  return reply.status(200).send(raffles);
}

export async function createRaffleClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name, cpf, telephone } = createRaffleClientSchema.parse(request.body);

  const clientCreated = await createRaffleClientsService({
    name,
    cpf,
    telephone,
  });

  return reply.status(201).send(clientCreated);
}

export async function updateRaffleClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = raffleClientIdSchema.parse(request.params);

  const { name, cpf, telephone } = updateRaffleClientSchema.parse(request.body);

  const clientUpdated = await updateRaffleClientsService(
    {
      name,
      cpf,
      telephone,
    },
    id
  );

  return reply.status(200).send(clientUpdated);
}

export async function deleteRaffleClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = raffleClientIdSchema.parse(request.params);

  const clientDeleted = await deleteRaffleClientsService(id);

  return reply.status(200).send(clientDeleted);
}
