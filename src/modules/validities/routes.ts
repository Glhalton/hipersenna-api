import { FastifyInstance } from "fastify";
import { createValidity } from "./service";
import { createValiditiesSchema } from "./schema";

export default async function validitiesRoutes(app:FastifyInstance){
    
    app.get('/', async () => {

    });

    app.get('/:id', async () => {

    });

    app.post('/', async (request, reply) => {

        const data = createValiditiesSchema.parse(request.body);

        const validity = await createValidity(data)

        return reply.status(201).send({validityId: validity.id})
    });




}