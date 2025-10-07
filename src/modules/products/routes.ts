import { FastifyInstance } from "fastify";
import { getProductParamSchema } from "./schema";
import { getProductById } from "./service";

export default async function productsRoutes(app: FastifyInstance) {
    app.get('/:productId', async (request, reply) => {
        try {
            const { productId } = getProductParamSchema.parse(request.params);
            const product = await getProductById(productId);

            if (!product[0]) {
                return reply.status(404).send({ message: "Produto não encontrado!" })
            }

            return reply.status(200).send(product);
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` });
        }
    })
}