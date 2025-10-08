import { FastifyInstance } from "fastify";
import { signInBodySchema } from "./schema";
import { signInService, saveSession, deleteSessions } from "./service";
import jwt from "jsonwebtoken";

export default async function userAuthRoutes(app: FastifyInstance) {

    app.post('/signin', async (request, reply) => {
        try {
            const parsedData = signInBodySchema.parse(request.body);
            const user = await signInService(parsedData);

            if (!user) {
                return reply.status(400).send({ message: "Usuário ou senha inválidos!" });
            }

            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                throw new Error("JWT_SECRET não definido no .env");
            }

            const token = jwt.sign({
                id: user.id,
                name: user.name,
                username: user.username,
                winthor_id: user.winthor_id,
                branch_id: user.branch_id,
                access_level: user.access_level

            }, jwtSecret,
                {
                    expiresIn: '12h'
                });

            const decoded: any = jwt.decode(token);

            const expires_at = new Date(decoded.exp * 1000);

            const deletedSessions = deleteSessions(user.id)

            const createdSession = await saveSession(user.id, token, expires_at);

            return reply.status(200).send({ message: "Usuário logado com sucesso!", token });

        } catch (error: any) {
            return reply.status(500).send({ message: `Erro no servidor: ${error.message}` });
        }
    });

}