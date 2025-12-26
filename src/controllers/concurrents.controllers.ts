import { FastifyRequest, FastifyReply } from "fastify";
import { getConcurrentSchema } from "../schemas/concurrents.schemas.js";
import { getConcurrentsService } from "../services/concurrents.services.js";
import { ZodError } from "zod";
import { NotFound } from "../errors/notFound.error.js";

export async function getConcurrentsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id, name } = getConcurrentSchema.parse(request.query);
  const concurrents = await getConcurrentsService({ id, name });

  return reply.status(200).send(concurrents);
}
