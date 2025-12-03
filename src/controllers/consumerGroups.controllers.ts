import { FastifyReply, FastifyRequest } from "fastify";
import { getConsumerGroupsSchema } from "../schemas/consumerGroups.schemas.js";
import { getConsumerGroupsService } from "../services/consumerGroups.services.js";

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
        .send({ message: "Grupo de consumo não encontrado!F" });
    }

    return reply.status(200).send(consumerGroups);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
