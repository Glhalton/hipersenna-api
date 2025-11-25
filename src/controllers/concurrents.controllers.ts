import { FastifyRequest, FastifyReply } from "fastify";
import { getConcurrentSchema } from "../schemas/concurrents.schemas.js";
import { getConcurrentsService } from "../services/concurrents.services.js";

export async function getConcurrentsController(request: FastifyRequest, reply: FastifyReply){
try{
    const {id, name} = getConcurrentSchema.parse(request.query);
    const concurrents = await getConcurrentsService({id , name});

    if(!concurrents || concurrents.length === 0){
        return reply.status(404).send({message: "Concorrente não encontrado!"})
    }

    return reply.status(200).send(concurrents);

} catch (error: any){
    return reply.status(400).send({message: error.message})
}
}