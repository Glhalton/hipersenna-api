import { FastifyInstance } from "fastify";
import { createValidityRequestsSchema } from "./schema.js";
import { createValidityRequest } from "./service.js";
import { prisma } from "../../lib/prisma.js";


export async function validityRequestsRoutes(app: FastifyInstance){

    app.get('/', async (request, reply) => {

        const validityRequests = await prisma.hsvalidity_requests.findMany()
        return reply.status(200).send(validityRequests);

    })

    app.get('/:id', async (request, reply) => {

    })

    app.post('/', async (request, reply) => {

        const data = createValidityRequestsSchema.parse(request.body);

        const validityRequest = await createValidityRequest(data)

        return reply.status(201).send({validityRequestId: validityRequest.id})

    })

    app.patch('/:id', async (request, reply) => {

    })

}