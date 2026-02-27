import { FastifyReply, FastifyRequest } from "fastify";
import { getValidityProductsSchema } from "../schemas/validityProducts.schemas.js";
import { getValidityProductsService } from "../services/validityProducts.services.js";

export async function getValidityProductsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const {
    branchId,
    id,
    initialCreationDate,
    initialValidityDate,
    finalCreationDate,
    finalValidityDate,
    expiresDays,
    orderBy,
  } = getValidityProductsSchema.parse(request.query);

  const data = await getValidityProductsService({
    branchId,
    expiresDays,
    finalCreationDate,
    finalValidityDate,
    id,
    initialCreationDate,
    initialValidityDate,
    orderBy,
  });

  return reply.status(200).send(data);
}
