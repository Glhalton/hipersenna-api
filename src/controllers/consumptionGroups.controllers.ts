import { FastifyReply, FastifyRequest } from "fastify";
import {
  consumptionGroupsId,
  createConsumptionGroupsSchema,
  getConsumptionGroupsSchema,
  updateConsumptionGroupsSchema,
} from "../schemas/consumptionGroups.schemas.js";
import {
  createConsumptionGroupsService,
  deleteConsumptionGroupsService,
  getConsumptionGroupsService,
  updateConsumptionGroupsService,
} from "../services/consumptionGroups.services.js";

export async function getConsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = getConsumptionGroupsSchema.parse(request.query);

  const consumptionGroups = await getConsumptionGroupsService({ id });

  return reply.status(200).send(consumptionGroups);
}

export async function createConsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { description } = createConsumptionGroupsSchema.parse(request.body);

  const consumptionGroupCreated = await createConsumptionGroupsService({
    description,
  });

  return reply.status(201).send(consumptionGroupCreated);
}

export async function updateConsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = consumptionGroupsId.parse(request.params);
  const { description } = updateConsumptionGroupsSchema.parse(request.body);

  const consumptionGroupUpdated = await updateConsumptionGroupsService(id, {
    description,
  });

  return reply.status(200).send(consumptionGroupUpdated);
}

export async function deleteConsumptionGroupsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = consumptionGroupsId.parse(request.params);

  const consumptionGroupDeleted = await deleteConsumptionGroupsService(id);

  return reply.status(200).send(consumptionGroupDeleted);
}
