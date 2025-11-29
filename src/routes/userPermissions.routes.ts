import { FastifyInstance } from "fastify";
import {
  createUserPermissionsController,
  deleteUserPermissionsController,
  getUserPermissionsController,
} from "../controllers/userPermissions.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import { userIdSchema } from "../schemas/users.schemas.js";
import {
  userPermissionSchema,
  userPermissionsResponseSchema,
} from "../schemas/userPermissions.schemas.js";
import z from "zod";

export default async function userPermissionsRoutes(app: FastifyInstance) {
  app.get(
    "/:id",
    {
      preHandler: authorizePermissions(18),
      schema: {
        description:
          "Realiza a consulta de permissões vinculadas a um determinado usuário.",
        security: [{ BearerAuth: [] }],
        params: userIdSchema,
        response: {
          200: z.array(userPermissionsResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["User-Permissions"],
        summary: "Rota de consulta de permissões de usuários.",
      },
    },
    getUserPermissionsController
  );

  app.post(
    "/",
    {
      preHandler: authorizePermissions(19),
      schema: {
        description:
          "Realiza a liberação de permissões a um determiando usuário.",
        security: [{ BearerAuth: [] }],
        body: userPermissionSchema,
        response: {
          201: z.object({ message: z.string() }),
        },
        tags: ["User-Permissions"],
        summary: "Rota de liberação de permissões a usuários.",
      },
    },
    createUserPermissionsController
  );

  app.delete(
    "/",
    {
      preHandler: authorizePermissions(20),
      schema: {
        description:
          "Realiza a exclusão de permissões de um determinado usuário.",
        security: [{ BearerAuth: [] }],
        body: userPermissionSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
        tags: ["User-Permissions"],
        summary: "Rota de exclusão de permissões de usuários.",
      },
    },
    deleteUserPermissionsController
  );
}
