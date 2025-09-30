import { FastifyInstance } from "fastify";
import { signInParamSchema, signUpParamSchema } from "./schema";
import { signInService, signUpService, findUser } from "./service";
import jwt from "jsonwebtoken";
import { env } from "process";

export default async function userAuthRoutes(app: FastifyInstance) {

    

    app.post('/signup', async (request, reply) => {
        try {
            const parsed = signUpParamSchema.parse(request.body);
            const user = await findUser(parsed.winthor_id, parsed.username)

            if (user) {
                return reply.status(409).send({
                    message: "Username ou código do winthor já cadastrados no sistema"
                })
            }

            const userCreated = await signUpService(parsed);

            return reply.status(201).send({ message: "Usuário criado com sucesso!", userCreated });
        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }
    });

    app.post('/signin', async (request, reply) => {
        try {
            const parsed = signInParamSchema.parse(request.body);
            const user = await signInService(parsed);

            if (!user) {
                return reply.status(400).send({ error: "Usuário ou senha inválidos!" });
            }

            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                throw new Error("JWT_SECRET não definido no .env");
            }

            const token = jwt.sign({ id: user.id, username: user.username, winthor_id: user.winthor_id }, jwtSecret, {
                expiresIn: "1h",
            });

            return reply.status(200).send({ message: "Usuário logado com sucesso!", token });

        } catch (err: any) {
            return reply.status(400).send(err);
        }
    });
}