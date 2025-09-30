import { FastifyInstance } from "fastify";
import { createValidity, listValiditiesByEmployeeId, getValidityById } from "./service.js";
import { createValidityParamSchema, listValiditiesByEmployeeParamSchema, getValidityParamSchema, createValidityProductParamSchema } from "./schema.js";
import { prisma } from "../../lib/prisma.js";
import z from "zod";

export default async function validitiesRoutes(app: FastifyInstance) {

    app.get('/', async (request, reply) => {
        const validities = await prisma.hsvalidities.findMany();
        return reply.status(200).send(validities);
    });

    app.get('/:validityId', async (request, reply) => {
        const { validityId } = getValidityParamSchema.parse(request.params);
        const validity = await getValidityById(validityId);
        return reply.status(200).send(validity);
    });

    app.get('/employee/:employeeId', async (request, reply) => {
        try {
            const { employeeId } = listValiditiesByEmployeeParamSchema.parse(request.params);
            const validitiesByEmployee = await listValiditiesByEmployeeId(employeeId);
            return reply.status(200).send({ validitiesByEmployee });
        } catch(err: any){
            console.log(err.message)
            reply.status(400).send({error: err.message})
        }
        
    });

    app.post('/', async (request, reply) => {
        try {
            const bodySchema = z.object({
                validity: createValidityParamSchema,
                products: z.array(createValidityProductParamSchema)
            });

            const { validity, products } = bodySchema.parse(request.body);
            const createdValidity = await createValidity({ validity, products });

            return reply.status(201).send({
                createdValidity,
                message: "Validade criada com sucesso"
            });

        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }
    });
}