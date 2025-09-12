import { FastifyInstance } from "fastify";
import { createValidityRequestsSchema } from "./schema";
import { createValidityRequest } from "./service";


export async function validityRequestsRoutes(app: FastifyInstance){

    app.get('/', async () => {

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