import { FastifyInstance } from "fastify";
import {
  createUserController,
  deleteUserController,
  getTokenDataController,
  getUserController,
  updateUserController,
} from "../controllers/users.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  userIdSchema,
  userResponseSchema,
} from "../schemas/users.schemas.js";

export default async function usersRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authorizePermissions(1),
      schema: {
        description:
          "Realiza a consulta de usuários. Retorna uma lista de usuários, podendo ser filtrado pelo id, nome, username, id do winthor ou filial.",
        querystring: getUserSchema,
        response: {
          200: userResponseSchema,
        },
        tags: ["Users"],
        summary: "Rota de consulta de usuários.",
      },
    },
    getUserController
  );

  app.post(
    "/",
    {
      preHandler: authorizePermissions(2),
      schema: {
        description: "Realiza a criação de um usuário.",
        body: createUserSchema,
        response: {
          200: userResponseSchema,
        },
        tags: ["Users"],
        summary: "Rota de criação de usuários.",
      },
    },
    createUserController
  );

  app.patch(
    "/id/:id",
    {
      preHandler: authorizePermissions(4),
      schema: {
        description: "Realiza a atualização de dados de um usuário.",
        params: userIdSchema,
        body: updateUserSchema,
        response: {
          200: userResponseSchema,
        },
        tags: ["Users"],
        summary: "Rota de atualização de dados de usuários.",
      },
    },
    updateUserController
  );

  app.delete(
    "/id/:id",
    {
      preHandler: authorizePermissions(3),
      schema: {
        description: "Realiza a exclusão de um usuário.",
        params: userIdSchema,
        response: {
          200: userResponseSchema,
        },
        tags: ["Users"],
        summary: "Rota de exclusão de usuários.",
      },
    },
    deleteUserController
  );


  app.get("/me", getTokenDataController);
}
