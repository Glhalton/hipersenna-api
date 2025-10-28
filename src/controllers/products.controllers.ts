import { FastifyRequest, FastifyReply } from "fastify";
import { getProductSchema } from "../schemas/products.schemas";
import { getProductService } from "../services/products.services";

export async function getProductController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { codprod, codauxiliar, descricao } = getProductSchema.parse(
      request.query
    );
    const product = await getProductService(codprod, codauxiliar, descricao);

    if (product == 200) {
      return reply
        .status(404)
        .send({ message: "Informe pelo menos um filtro de busca" });
    }

    if (product == 404) {
      return reply.status(404).send({ message: "Produto não encontrado!" });
    }

    return reply.status(200).send(product);
  } catch (error: any) {
    return reply
      .status(500)
      .send({ message: `Erro no servidor: ${error.message}` });
  }
}
