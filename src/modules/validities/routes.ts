import { FastifyInstance } from "fastify";
import { createValidity, listValiditiesByEmployeeId, getValidityById } from "./service.js";
import { createValidityBodySchema, getValidityParamSchema, createValidityProductBodySchema } from "./schema.js";
import { prisma } from "../../lib/prisma.js";
import z from "zod";

export default async function validitiesRoutes(app: FastifyInstance) {

    app.get('/', async (request, reply) => {
        try {
            const validities = await prisma.hsvalidities.findMany();
            return reply.status(200).send(validities);
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` });
        }
    });

    app.get('/:validityId', async (request, reply) => {
        try {
            const { validityId } = getValidityParamSchema.parse(request.params);
            const validity = await getValidityById(validityId);
            return reply.status(200).send(validity);
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` });
        }
    });

    app.get('/employee', async (request, reply) => {
        try {
            const userId = request.user?.id;
            const validitiesByEmployee = await listValiditiesByEmployeeId(userId!);
            return reply.status(200).send({ validitiesByEmployee });
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` })
        }
    });

    app.post('/', async (request, reply) => {
        try {
            const userId = request.user?.id;
            if (!userId) {
                return reply.status(400).send({ message: "Id do usuario inválido" })
            }

            const bodySchema = z.object({
                validity: createValidityBodySchema,
                products: z.array(createValidityProductBodySchema)
            });

            const { validity, products } = bodySchema.parse(request.body);
            const createdValidity = await createValidity({ validity, products, userId });

            return reply.status(201).send({
                message: "Validade criada com sucesso",
                createdValidity
            });

        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` })
        }
    });
}