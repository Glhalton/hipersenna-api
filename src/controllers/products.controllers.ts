import { FastifyRequest, FastifyReply } from "fastify";
import { getProductSchema } from "../schemas/products.schemas.js";
import { getProductService } from "../services/products.services.js";

export async function getProductController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { codprod, codauxiliar, descricao, codfilial } =
      getProductSchema.parse(request.query);
    const product = await getProductService(
      codprod,
      codauxiliar,
      descricao,
      codfilial
    );

    if (product == 400) {
      return reply
        .status(400)
        .send({ message: "Informe pelo menos um filtro de busca" });
    }

    if (!product || product.length === 0) {
      return reply.status(404).send({ message: "Nenhum produto encontrado!" });
    }

    return reply.status(200).send(product);
  } catch (error: any) {
    return reply
      .status(500)
      .send({ message: `Erro no servidor: ${error.message}` });
  }
}
