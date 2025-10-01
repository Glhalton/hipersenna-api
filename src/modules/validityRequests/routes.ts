import { FastifyInstance } from "fastify";
import { createValidityRequestsBodySchema, createValidityRequestProductsBodySchema, updateValidityRequestByIdBodySchema } from "./schema.js";
import { createValidityRequest, listValidityRequestsByEmployeeId, updateValidityRequest } from "./service.js";
import { prisma } from "../../lib/prisma.js";
import z from "zod";


export async function validityRequestsRoutes(app: FastifyInstance) {

    app.get('/', async (request, reply) => {
        try {
            const validityRequests = await prisma.hsvalidity_requests.findMany()
            return reply.status(200).send(validityRequests);
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` })
        }
    })

    app.get('/employee', async (request, reply) => {
        try {
            const userId = request.user?.id;
            const validityRequestsByEmployee = await listValidityRequestsByEmployeeId(userId!);
            return reply.status(200).send({ validityRequestsByEmployee });
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` })
        }
    })

    app.post('/', async (request, reply) => {
        try {
            const userId = request.user?.id;
            if (!userId) {
                return reply.status(400).send({ message: "Id do usuario invalido" })
            }

            const bodySchema = z.object({
                validityRequest: createValidityRequestsBodySchema,
                requestProducts: z.array(createValidityRequestProductsBodySchema)
            })

            const { validityRequest, requestProducts } = bodySchema.parse(request.body);

            const createdValidityRequest = await createValidityRequest({ validityRequest, requestProducts, userId });

            return reply.status(201).send({
                message: "Solicitação de validade criada com sucesso!",
                createdValidityRequest
            })

        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` })
        }

    })

    app.patch("/validityRequestsUpdate", async (request, reply) => {
        try {
            const data = updateValidityRequestByIdBodySchema.parse(request.body);
            const validityRequestUpdate = await updateValidityRequest(data);

            return reply.send({
                success: true,
                message: "Solicitação e produtos atualizados com sucesso",
                validityRequestUpdate,
            });
        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` })
        }
    });
}