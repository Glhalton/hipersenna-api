import { FastifyReply, FastifyRequest } from "fastify";
import {
  consumerGroupsId,
  createConsumerGroupsSchema,
  getConsumerGroupsSchema,
  updateConsumerGroupsSchema,
} from "../schemas/consumerGroups.schemas.js";
import {
  createConsumerGroupsService,
  deleteConsumerGroupsService,
  getConsumerGroupsService,
  updateConsumerGroupsService,
} from "../services/consumerGroups.services.js";

export async function getConsumerGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = getConsumerGroupsSchema.parse(request.query);

    const consumerGroups = await getConsumerGroupsService({ id });

    if (!consumerGroups || consumerGroups.length === 0) {
      return reply
        .status(404)
        .send({ message: "Grupo de consumo não encontrado!" });
    }

    return reply.status(200).send(consumerGroups);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createConsumerGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { description } = createConsumerGroupsSchema.parse(request.body);

    const consumerGroupCreated = await createConsumerGroupsService({
      description,
    });

    return reply.status(201).send(consumerGroupCreated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateConsumerGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumerGroupsId.parse(request.params);
    const { description } = updateConsumerGroupsSchema.parse(request.body);

    const consumerGroup = await getConsumerGroupsService({ id });

    if (consumerGroup.length === 0) {
      return reply
        .status(404)
        .send({ message: "Grupo de consumo não encontrado!" });
    }

    const consumerGroupUpdated = await updateConsumerGroupsService(id, {
      description,
    });

    return reply.status(200).send(consumerGroupUpdated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteConsumerGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumerGroupsId.parse(request.params);

    const consumerGroup = await getConsumerGroupsService({ id });

    if (consumerGroup.length === 0) {
      return reply
        .status(404)
        .send({ message: "Grupo de consumo não encontrado" });
    }

    const consumerGroupDeleted = await deleteConsumerGroupsService(id);

    return reply.status(200).send(consumerGroupDeleted);
  } catch (error: any) {
    return reply.status(400).send({
      message: error.message,
    });
  }
}
