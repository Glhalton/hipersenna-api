import { FastifyInstance } from "fastify";
import { auth } from "../../lib/auth";

export default async function userSignUpRoutes(app: FastifyInstance) {
    app.post('/', async (request, reply) => { 
        try {
            const { email, name, password, username, branch_id, access_level } = request.body as {
                email: string,
                name: string,
                password: string,
                username: string,
                branch_id: number,
                access_level: number,
            }

            const data = await auth.api.signUpEmail({
                body: {
                    email,
                    name,
                    password,
                    username,
                    displayUsername: username,
                    branch_id,
                    access_level,
                }
            })

            return reply.status(201).send(data)
        } catch (err:any) {
            return reply.status(400).send({ error: err.message })
        }
    });
}