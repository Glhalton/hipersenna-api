import { FastifyInstance } from "fastify";
import { signInBodySchema, signUpBodySchema } from "./schema";
import { signInService, signUpService, findUser } from "./service";
import jwt from "jsonwebtoken";

export default async function userAuthRoutes(app: FastifyInstance) {
    app.post('/signup', async (request, reply) => {
        try {
            const dataParsed = signUpBodySchema.parse(request.body);
            const user = await findUser(dataParsed.winthor_id, dataParsed.username)

            if (user) {
                return reply.status(409).send({
                    message: "Username ou código do winthor já cadastrados no sistema"
                })
            }

            const userCreated = await signUpService(dataParsed);

            return reply.status(201).send({ message: "Usuário criado com sucesso!", userCreated });
        } catch (err: any) {
            return reply.status(400).send({ message: "Erro ao criar usuário", error: err.message })
        }
    });

    app.post('/signin', async (request, reply) => {
        try {
            const dataParsed = signInBodySchema.parse(request.body);
            const user = await signInService(dataParsed);

            if (!user) {
                return reply.status(400).send({ error: "Usuário ou senha inválidos!" });
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
            }, jwtSecret, {
                expiresIn: "24h",
            });

            return reply.status(200).send({ message: "Usuário logado com sucesso!", token });

        } catch (err: any) {
            return reply.status(400).send(err);
        }
    });
}