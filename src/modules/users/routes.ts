import { FastifyInstance } from "fastify";
import { auth } from "../../lib/auth";
import { signInSchema, signUpSchema } from "./schema";
import { signInService, signUpService } from "./service";

export default async function userAuthRoutes(app: FastifyInstance) {
    app.post('/signup', async (request, reply) => {
        try {
            const parsed = signUpSchema.parse(request.body);

            const data = await signUpService(parsed);

            return reply.status(201).send(data);
        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }
    });

    app.post('/signin', async (request, reply) => {
        try {
            const parsed = signInSchema.parse(request.body);
            const data = await signInService(parsed);

            return reply.status(200).send({
                message: 'Usuário logado com sucesso',
                token: data?.token,
                user: data?.user
            });

        } catch (err: any) {
            return reply.status(400).send({ error: err.message });
        }
    });
}