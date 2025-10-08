import { FastifyInstance } from "fastify";
import { getProductParamSchema } from "./schema";
import { getProductById } from "./service";

export default async function productsRoutes(app: FastifyInstance) {
    app.get('/:productId', async (request, reply) => {
        try {
            const { codprod, codauxiliar, descricao } = getProductParamSchema.parse(request.query);
            const product = await getProductById(codprod, codauxiliar, descricao);

            if (product == 200) {
                return reply.status(404).send({ message: "Informe pelo menos um filtro de busca" })
            }

            if (product == 404) {
                return reply.status(404).send({ message: "Produto não encontrado!" })
            }

            return reply.status(200).send(product);
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` });
        }
    })
}