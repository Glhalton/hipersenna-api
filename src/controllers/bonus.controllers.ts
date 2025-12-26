import { FastifyRequest, FastifyReply } from "fastify";
import { getBonusSchema } from "../schemas/bonus.schemas.js";
import { getBonusService } from "../services/bonus.services.js";

export async function bonusListController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    codprod,
    dpart,
    dtbonusend,
    dtbonusstart,
    dtvalidend,
    dtvalidstart,
    filial,
  } = getBonusSchema.parse(request.query);
  const result = await getBonusService({
    codprod,
    dpart,
    dtbonusend,
    dtbonusstart,
    dtvalidend,
    dtvalidstart,
    filial,
  });

  return reply.status(200).send(result);
}
