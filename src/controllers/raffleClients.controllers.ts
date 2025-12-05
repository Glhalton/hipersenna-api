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
  try {
    const { id, cpf } = getRaffleClientSchema.parse(request.query);

    const raffles = await getRaffleClientsService({ id, cpf });

    if (raffles.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nenhum cliente de rifa encontrado." });
    }

    return reply.status(200).send(raffles);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createRaffleClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { name, cpf, telephone } = createRaffleClientSchema.parse(
      request.body
    );

    const client = await getRaffleClientsService({ cpf });

    if (client.length > 0) {
      return reply.status(409).send({
        message: "Já existe um usuário com esse CPF cadastrado no sistema",
      });
    }

    const clientCreated = await createRaffleClientsService({
      name,
      cpf,
      telephone,
    });

    return reply.status(200).send(clientCreated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateRaffleClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = raffleClientIdSchema.parse(request.params);

    const client = await getRaffleClientsService({ id });

    if (client.length === 0) {
      return reply
        .status(404)
        .send({ message: "Cliente da rifa não encontrado!" });
    }

    const { name, cpf, telephone } = updateRaffleClientSchema.parse(
      request.body
    );

    const clientUpdated = await updateRaffleClientsService(
      {
        name,
        cpf,
        telephone,
      },
      id
    );

    return reply.status(200).send(clientUpdated);
  } catch (error: any) {
    reply.status(400).send({ message: error.message });
  }
}

export async function deleteRaffleClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = raffleClientIdSchema.parse(request.params);

    const client = await getRaffleClientsService({ id });

    if (client.length === 0) {
      return reply
        .status(404)
        .send({ message: "Cliente da rifa não encontrado!" });
    }

    const clientDeleted = await deleteRaffleClientsService(id);

    return reply.status(200).send(clientDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
