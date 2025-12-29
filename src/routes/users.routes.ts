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
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function usersRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(21)],
      schema: {
        summary: "Rota de consulta de usuários.",
        description:
          "Realiza a consulta de usuários. Retorna uma lista de usuários, podendo ser filtrado pelo id, nome, username, id do winthor ou filial.",
        tags: ["Users"],
        security: [{ BearerAuth: [] }],
        querystring: getUserSchema,
        response: {
          200: z.array(userResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getUserController
  );

  app.get(
    "/me",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de dados do usuário que consultou.",
        description: "Retorna os dados do usuário que realizou a consulta.",
        tags: ["Users"],
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(userResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getMeController
  );

  app.get(
    "/token",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de dados do token.",
        description: "Retorna os dados do token",
        security: [{ BearerAuth: [] }],
        tags: ["Users"],
      },
    },
    getTokenDataController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(22)],
      schema: {
        summary: "Rota de criação de usuários.",
        description: "Realiza a criação de um usuário.",
        tags: ["Users"],
        security: [{ BearerAuth: [] }],
        body: createUserSchema,
        response: {
          201: userResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          409: z.object({ message: z.string() }).describe("Conflict"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createUserController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(23)],
      schema: {
        summary: "Rota de atualização de dados de usuários.",
        description: "Realiza a atualização de dados de um usuário.",
        tags: ["Users"],
        security: [{ BearerAuth: [] }],
        params: userIdSchema,
        body: updateUserSchema,
        response: {
          200: userResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    updateUserController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(24)],
      schema: {
        summary: "Rota de exclusão de usuários.",
        description: "Realiza a exclusão de um usuário.",
        tags: ["Users"],
        security: [{ BearerAuth: [] }],
        params: userIdSchema,
        response: {
          200: userResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    deleteUserController
  );
}
