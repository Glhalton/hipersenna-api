import { FastifyInstance } from "fastify";
import { createValidity, getValidityByEmployeeId, getValidityById } from "./service.js";
import { createValiditiesSchema, getValiditiesByEmployeeParamSchema, getValiditiesParamSchema, productSchema } from "./schema.js";
import { prisma } from "../../lib/prisma.js";
import z from "zod";

export default async function validitiesRoutes(app: FastifyInstance) {

    app.get('/', async (request, reply) => {
        const validities = await prisma.hsvalidities.findMany();
        return reply.status(200).send(validities);
    });

    app.get('/:validityId', async (request, reply) => {
        const { validityId } = getValiditiesParamSchema.parse(request.params);
        const validity = await getValidityById(validityId);
        return reply.status(200).send(validity);
    });

    app.get('/employee/:employeeId', async (request, reply) => {
        const { employeeId } = getValiditiesByEmployeeParamSchema.parse(request.params);
        const validitiesByEmployee = await getValidityByEmployeeId(employeeId);
        return reply.status(200).send({ validitiesByEmployee });
    });

    app.post('/', async (request, reply) => {
        try {

            const bodySchema = z.object({
                validity: createValiditiesSchema,
                products: z.array(productSchema)
            });

            const { validity, products } = bodySchema.parse(request.body);


            const createdValidity = await createValidity({ validity, products });

            return reply.status(201).send({
                createdValidity,
                mensagem: "Validade criada com sucesso"
            });

        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }

    });
}