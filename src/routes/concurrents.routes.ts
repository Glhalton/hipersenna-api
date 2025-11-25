import { FastifyInstance } from "fastify";
import { getConcurrentsController } from "../controllers/concurrents.controllers.js";
import { concurrentResponseSchema, getConcurrentSchema } from "../schemas/concurrents.schemas.js";
import z from "zod";

export default async function concurrentsRoutes(app:FastifyInstance){
    app.get("/",{schema:{
        description: "Realiza a consulta de concorrentes.",
        security: [{BearerAuth: []}],
        querystring: getConcurrentSchema,
        response: {
            200: z.array(concurrentResponseSchema),
            404: z.object({message: z.string()})
        },
        tags: ["Concurrents"],
        summary: "Rota de consulta de concorrentes"

    }} ,getConcurrentsController);
}