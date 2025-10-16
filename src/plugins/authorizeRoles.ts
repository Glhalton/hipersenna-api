import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {prisma }from "../lib/prisma";

export async function is(fastify: FastifyInstance){
    fastify.decorate(
        "authorizeRoles",
        async function (
            request: FastifyRequest,
            reply: FastifyReply,
            allowedRoles: string[]
        ) {
            try{
                const userId = request.user?.id;
                if(!userId){
                    return reply.status(401).send({message: "Usuário não autenticado"});
                }

                const user
            }
        }
    )
}