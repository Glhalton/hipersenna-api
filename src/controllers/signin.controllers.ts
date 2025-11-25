import { FastifyRequest, FastifyReply } from "fastify";
import { signInSchema } from '../schemas/signin.schemas.js';
import { signInService } from '../services/signin.services.js';
import {
  deleteSessionService,
  createSessionService,
} from '../services/signin.services.js';
import jwt from "jsonwebtoken";
import { ZodError } from "zod";

export async function signinController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const parsedData = signInSchema.parse(request.body);
    const user = await signInService(parsedData);

    if (!user) {
      return reply.status(401).send({message: "Usuário ou senha estão incorretos!"})
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET não definido no .env");
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        username: user.username,
        winthor_id: user.winthor_id,
        branch_id: user.branch_id,
        roles: user.hsusers_roles,
      },
      jwtSecret,
      {
        expiresIn: "12h",
      }
    );

    const decoded: any = jwt.decode(token);
    const expires_at = new Date(decoded.exp * 1000);
    const deletedSessions = await deleteSessionService(user.id);
    const createdSession = await createSessionService(
      user.id,
      token,
      expires_at
    );

    return reply
      .status(200)
      .send({ message: "Usuário logado com sucesso!", token });
  } catch (error: any) {
    if (error instanceof ZodError) {
      const messages = error.issues.map((e) => e.message);
      return reply.status(400).send({ message: messages[0] });
    } else {
      return reply.status(400).send({ message: error.message });
    }
  }
}
