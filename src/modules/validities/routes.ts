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
        } catch (err: any) {
            return reply.status(401).send({ error: err.message });
        }
    });

    app.get('/:validityId', async (request, reply) => {
        try {
            const { validityId } = getValidityParamSchema.parse(request.params);
            const validity = await getValidityById(validityId);
            return reply.status(200).send(validity);
        } catch (err: any) {
            return reply.status(401).send({ error: err.message });
        }
    });

    app.get('/employee', async (request, reply) => {
        try {
            const userId = request.user?.id;
            const validitiesByEmployee = await listValiditiesByEmployeeId(userId!);
            return reply.status(200).send({ validitiesByEmployee });
        } catch (err: any) {
            return reply.status(401).send({ error: err.message })
        }
    });

    app.post('/', async (request, reply) => {
        try {
            const userId = request.user?.id;
            if (!userId) {
                return reply.status(400).send({ message: "Id do usuario invalido" })
            }

            const bodySchema = z.object({
                validity: createValidityBodySchema,
                products: z.array(createValidityProductBodySchema)
            });

            const { validity, products } = bodySchema.parse(request.body);
            const createdValidity = await createValidity({ validity, products, userId });

            return reply.status(201).send({
                createdValidity,
                message: "Validade criada com sucesso"
            });

        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }
    });
}