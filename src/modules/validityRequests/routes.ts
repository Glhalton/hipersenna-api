import { FastifyInstance } from "fastify";
import { createValidityRequestsParamSchema, getValidityRequestsByEmployeeIdParamSchema, createValidityRequestProductsParamSchema, updateValidityRequestByIdParamSchema } from "./schema.js";
import { createValidityRequest, listValidityRequestsByEmployeeId, updateValidityRequestById } from "./service.js";
import { prisma } from "../../lib/prisma.js";
import z from "zod";


export async function validityRequestsRoutes(app: FastifyInstance) {

    app.get('/', async (request, reply) => {

        const validityRequests = await prisma.hsvalidity_requests.findMany()
        return reply.status(200).send(validityRequests);

    })

    app.get('/:id', async (request, reply) => {

    })

    app.get('/employee/:employeeId', async (request, reply) => {
        try {
            const { employeeId } = getValidityRequestsByEmployeeIdParamSchema.parse(request.params);
            const validityRequestsByEmployee = await listValidityRequestsByEmployeeId(employeeId);
            return reply.status(200).send({ validityRequestsByEmployee });
        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }
    })

    app.post('/', async (request, reply) => {

        try {

            const bodySchema = z.object({
                validityRequest: createValidityRequestsParamSchema,
                requestProducts: z.array(createValidityRequestProductsParamSchema)
            })

            const { validityRequest, requestProducts } = bodySchema.parse(request.body);

            const createdValidityRequest = await createValidityRequest({ validityRequest, requestProducts });

            return reply.status(201).send({
                message: "Solicitação de validade criada com sucesso!",
                createdValidityRequest
            })

        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }

    })

    app.patch('/', async (request, reply) => {
        try {
            const {requestId, status} = updateValidityRequestByIdParamSchema.parse(request.body);
            const validityRequestUpdate = await updateValidityRequestById(requestId, status);
            return reply.status(200).send({
                message: "Status da validade alterada",
                validityRequestUpdate
            })
        } catch(err: any){
            return reply.status(400).send({error: err.message})
        }
    })
}