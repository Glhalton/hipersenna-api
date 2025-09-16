import { FastifyInstance } from "fastify";
import { createValidity, getValidityById } from "./service.js";
import { createValiditiesSchema, getValiditiesParamSchema } from "./schema.js";
import { prisma } from "../../lib/prisma.js";

export default async function validitiesRoutes(app: FastifyInstance) {

    app.get('/', async (request, reply) => {
        const validities = await prisma.hsvalidities.findMany();
        return reply.status(200).send(validities);
    });

    app.get('/:validityId', async (request, reply) => {
        const { validityId } = getValiditiesParamSchema.parse(request.params);
        const validityRequest = await getValidityById(validityId);
        return reply.status(200).send(validityRequest);
    });

    app.post('/', async (request, reply) => {
        const data = createValiditiesSchema.parse(request.body);
        const validity = await createValidity(data);
        return reply.status(201).send({ validityId: validity.id });
    });
}