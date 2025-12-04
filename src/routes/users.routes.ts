import { FastifyInstance } from "fastify";
import {
  createUserController,
  deleteUserController,
  getMeController,
  getTokenDataController,
  getUserController,
  updateUserController,
} from "../controllers/users.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  userIdSchema,
  userResponseSchema,
} from "../schemas/users.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function usersRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(21)],
      schema: {
        description:
          "Realiza a consulta de usuários. Retorna uma lista de usuários, podendo ser filtrado pelo id, nome, username, id do winthor ou filial.",
        security: [{ BearerAuth: [] }],
        querystring: getUserSchema,
        response: {
          200: z.array(userResponseSchema),
        },
        tags: ["Users"],
        summary: "Rota de consulta de usuários.",
      },
    },
    getUserController
  );

  app.get(
    "/me",
    {
      preHandler: [authenticate],
      schema: {
        description: "Retorna os dados do usuário que realizou a consulta.",
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(userResponseSchema),
        },
        tags: ["Users"],
        summary: "Rota de consulta de dados do usuário que consultou.",
      },
    },
    getMeController
  );

  app.get(
    "/token",
    {
      preHandler: [authenticate],
      schema: {
        description: "Retorna os dados do token",
        security: [{ BearerAuth: [] }],
        tags: ["Users"],
        summary: "Rota de consulta de dados do token.",
      },
    },
    getTokenDataController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(22)],
      schema: {
        description: "Realiza a criação de um usuário.",
        security: [{ BearerAuth: [] }],
        body: createUserSchema,
        response: {
          200: userResponseSchema,
          409: z.object({ message: z.string() }),
        },
        tags: ["Users"],
        summary: "Rota de criação de usuários.",
      },
    },
    createUserController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(23)],
      schema: {
        description: "Realiza a atualização de dados de um usuário.",
        security: [{ BearerAuth: [] }],
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
    "/:id",
    {
      preHandler: [authenticate, authorize(24)],
      schema: {
        description: "Realiza a exclusão de um usuário.",
        security: [{ BearerAuth: [] }],
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
}
