import { FastifyRequest, FastifyReply } from "fastify";
import { bonusSchema } from '../schemas/bonus.schemas.js';
import { bonusListService } from '../services/bonus.services.js';

export async function bonusListController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const query = bonusSchema.parse(request.query);
    const result = await bonusListService({ query });
    return reply.status(200).send(result.body);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
