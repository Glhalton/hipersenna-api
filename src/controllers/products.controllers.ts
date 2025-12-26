import { FastifyRequest, FastifyReply } from "fastify";
import { getProductSchema } from "../schemas/products.schemas.js";
import { getProductService } from "../services/products.services.js";

export async function getProductController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { codprod, codauxiliar, descricao, codfilial } = getProductSchema.parse(
    request.query
  );

  const product = await getProductService(
    codprod,
    codauxiliar,
    descricao,
    codfilial
  );

  return reply.status(200).send(product);
}
