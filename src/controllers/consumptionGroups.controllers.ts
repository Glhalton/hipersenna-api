import { FastifyReply, FastifyRequest } from "fastify";
import {
  consumptionGroupsId,
  createConsumptionGroupsSchema,
  getConsumptionGroupsSchema,
  updateConsumptionGroupsSchema,
} from "../schemas/consumptionGroups.schemas.js";
import {
  createconsumptionGroupsService,
  deleteconsumptionGroupsService,
  getconsumptionGroupsService,
  updateconsumptionGroupsService,
} from "../services/consumptionGroups.services.js";

export async function getconsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = getConsumptionGroupsSchema.parse(request.query);

    const consumptionGroups = await getconsumptionGroupsService({ id });

    if (!consumptionGroups || consumptionGroups.length === 0) {
      return reply
        .status(404)
        .send({ message: "Grupo de consumo não encontrado!" });
    }

    return reply.status(200).send(consumptionGroups);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createconsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { description } = createConsumptionGroupsSchema.parse(request.body);

    const consumptionGroupCreated = await createconsumptionGroupsService({
      description,
    });

    return reply.status(201).send(consumptionGroupCreated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateconsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumptionGroupsId.parse(request.params);
    const { description } = updateConsumptionGroupsSchema.parse(request.body);

    const consumptionGroup = await getconsumptionGroupsService({ id });

    if (consumptionGroup.length === 0) {
      return reply
        .status(404)
        .send({ message: "Grupo de consumo não encontrado!" });
    }

    const consumptionGroupUpdated = await updateconsumptionGroupsService(id, {
      description,
    });

    return reply.status(200).send(consumptionGroupUpdated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteconsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumptionGroupsId.parse(request.params);

    const consumptionGroup = await getconsumptionGroupsService({ id });

    if (consumptionGroup.length === 0) {
      return reply
        .status(404)
        .send({ message: "Grupo de consumo não encontrado" });
    }

    const consumptionGroupDeleted = await deleteconsumptionGroupsService(id);

    return reply.status(200).send(consumptionGroupDeleted);
  } catch (error: any) {
    return reply.status(400).send({
      message: error.message,
    });
  }
}
