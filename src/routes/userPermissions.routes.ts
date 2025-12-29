import { FastifyInstance } from "fastify";
import {
  createUserPermissionsController,
  deleteUserPermissionsController,
  getUserPermissionsController,
} from "../controllers/userPermissions.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import { userIdSchema } from "../schemas/users.schemas.js";
import {
  userPermissionSchema,
  userPermissionsResponseSchema,
} from "../schemas/userPermissions.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function userPermissionsRoutes(app: FastifyInstance) {
  app.get(
    "/:id",
    {
      preHandler: [authenticate, authorize(18)],
      schema: {
        summary: "Rota de consulta de permissões de usuários.",
        description:
          "Realiza a consulta de permissões vinculadas a um determinado usuário.",
        tags: ["User-Permissions"],
        security: [{ BearerAuth: [] }],
        params: userIdSchema,
        response: {
          200: z.array(userPermissionsResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getUserPermissionsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(19)],
      schema: {
        summary: "Rota de liberação de permissões a usuários.",
        description:
          "Realiza a liberação de permissões a um determiando usuário.",
        tags: ["User-Permissions"],
        security: [{ BearerAuth: [] }],
        body: userPermissionSchema,
        response: {
          201: z.object({ message: z.string() }).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createUserPermissionsController
  );

  app.delete(
    "/",
    {
      preHandler: [authenticate, authorize(20)],
      schema: {
        summary: "Rota de exclusão de permissões de usuários.",
        description:
          "Realiza a exclusão de permissões de um determinado usuário.",
        tags: ["User-Permissions"],
        security: [{ BearerAuth: [] }],
        body: userPermissionSchema,
        response: {
          200: z.object({ message: z.string() }).describe("Ok"),
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
    deleteUserPermissionsController
  );
}
