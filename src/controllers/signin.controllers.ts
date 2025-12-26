import { FastifyRequest, FastifyReply } from "fastify";
import { signInSchema } from "../schemas/signin.schemas.js";
import { signInService } from "../services/signin.services.js";

export async function signinController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { username, password } = signInSchema.parse(request.body);

  const signInData = await signInService({ username, password });

  return reply.status(201).send(signInData);
}
