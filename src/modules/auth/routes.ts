import { FastifyInstance } from "fastify";
import { signInBodySchema } from "./schema";
import { signInService, saveSession } from "./service";
import jwt from "jsonwebtoken";
import { signUpBodySchema } from "../users/schema";
import { findUser, signUpService } from "../users/service";

export default async function userAuthRoutes(app: FastifyInstance) {
  app.post("/signin", async (request, reply) => {
    try {
      const parsedData = signInBodySchema.parse(request.body);
      const user = await signInService(parsedData);

      if (!user) {
        return reply
          .status(400)
          .send({ message: "Usuário ou senha inválidos!" });
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
          access_level: user.access_level,
        },
        jwtSecret
      );

      const decoded: any = jwt.decode(token);

      const expires_at = new Date(decoded.exp * 1000);
      const createdSession = await saveSession(user.id, token);

      return reply
        .status(200)
        .send({ message: "Usuário logado com sucesso!", id: user.id, token });
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
  });

  app.post("/signup", async (request, reply) => {
    try {
      const parsedData = signUpBodySchema.parse(request.body);
      const user = await findUser(parsedData.winthor_id, parsedData.username);

      if (user) {
        return reply.status(409).send({
          message: "Username ou código do winthor já cadastrados no sistema",
        });
      }

      const userCreated = await signUpService(parsedData);

      return reply
        .status(201)
        .send({ message: "Usuário criado com sucesso!", userCreated });
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
  });
}
