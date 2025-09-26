import { FastifyInstance } from "fastify";
import { auth } from "../../lib/auth";
import { signInParamSchema, signUpParamSchema } from "./schema";
import { signInService, signUpService } from "./service";

export default async function userAuthRoutes(app: FastifyInstance) {


    app.get("/session", async (request, reply) => {
        try {
            // Cria uma instância de Headers
            const headers = new Headers();

            // Pega o token enviado no header Authorization
            const token = request.headers.authorization; // normalmente "Bearer <token>"
            if (token) {
                headers.set("Authorization", token);
            }

            // Chama a função getSession do SDK passando a instância correta de Headers
            const session = await auth.api.getSession({ headers });

            if (!session) {
                return reply.status(401).send({
                    message: "Sessão inválida ou expirada"
                });
            }

            return reply.status(200).send({
                message: "Sessão válida",
                user: session.user,
                session,
            });
        } catch (err: any) {
            return reply.status(400).send({ error: err.message });
        }
    });

    


app.post('/signup', async (request, reply) => {
    try {
        const parsed = signUpParamSchema.parse(request.body);

        const data = await signUpService(parsed);

        return reply.status(201).send(data);
    } catch (err: any) {
        return reply.status(400).send({ error: err.message })
    }
});

app.post('/signin', async (request, reply) => {
    try {
        const parsed = signInParamSchema.parse(request.body);
        const data = await signInService(parsed);

        return reply.status(200).send(data);

    } catch (err: any) {
        return reply.status(400).send({ error: "Usuário ou senha inválidos!" });
    }
});
}