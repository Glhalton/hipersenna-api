import { FastifyInstance } from "fastify";
import { updateUserBodySchema, userSchema } from "./schema";
import { deleteSession, deleteUser, getUser, updateUser } from "./service";

export default async function usersRoutes(app: FastifyInstance) {
  app.get("/me", async (request, reply) => {
    try {
      return reply.send(request.user);
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
  });

  app.get("/:id", async (request, reply) => {
    try {
      const { id } = userSchema.parse(request.params);

      const user = await getUser(id);

      if (!user) {
        return reply.status(404).send({ message: "Usuário não encontrado!" });
      }

      return reply.status(200).send({ user });
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
  });

  app.post("/signout", async (request, reply) => {
    try {
      const token = request.headers.authorization?.replace("Bearer ", "");

      if (!token) {
        return reply.status(401).send({ message: "Token não fornecido" });
      }

      const deletedSession = await deleteSession(token);

      if (!deletedSession) {
        return reply
          .status(404)
          .send({ message: "Sessão não encontrada ou já expirada" });
      }

      return reply
        .status(200)
        .send({ message: "Logout realizado com sucesso" });
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
  });

  app.delete("/:id", async (request, reply) => {
    try {
      const { id } = userSchema.parse(request.params);

      const userDeleted = await deleteUser(id);

      return reply.status(200).send({ userDeleted });
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
  });

  app.patch("/:id", async (request, reply) => {
    try {
      const { id } = userSchema.parse(request.params);

      const user = updateUserBodySchema.parse(request.body);

      const userUpdated = await updateUser(id, user);

      return reply.status(200).send({ userUpdated });
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: `Erro no servidor: ${error.message}` });
    }
  });
}
