import { FastifyInstance } from "fastify";
import {
  createPermissionController,
  deletePermissionController,
  getPermissionController,
  updatePermissionController,
} from "../controllers/permissions.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import {
  getPermissionSchema,
  permissionIdSchema,
  permissionResponseSchema,
  permissionSchema,
  updatePermissionSchema,
} from "../schemas/permissions.schemas.js";
import z from "zod";

export default async function permissionsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authorizePermissions(9),
      schema: {
        description: "Realiza a consulta de permissões",
        querystring: getPermissionSchema,
        response: {
          200: z.array(permissionResponseSchema),
        },
        tags: ["Permissions"],
        summary: "Rota de consulta de permissões.",
      },
    },
    getPermissionController
  );

  app.post(
    "/",
    {
      preHandler: authorizePermissions(6),
      schema: {
        description: "Realiza a criação de permissões.",
        querystring: permissionSchema,
        response: {
          201: permissionResponseSchema,
        },
        tags: ["Permissions"],
        summary: "Rota de criação de permissões",
      },
    },
    createPermissionController
  );

  app.patch(
    "/id/:id",
    {
      preHandler: authorizePermissions(8),
      schema: {
        description: "Realiza a atualização de dados de permissões.",
        params: permissionIdSchema,
        body: updatePermissionSchema,
        tags: ["Permissions"],
        summary: "Rota de atualização de permissões",
      },
    },
    updatePermissionController
  );

  app.delete(
    "/id/:id",
    {
      preHandler: authorizePermissions(7),
      schema: {
        description: "Realiza a exclusão de permissões.",
        params: permissionIdSchema,
        response: {
          200: permissionResponseSchema,
        },
        tags: ["Permissions"],
        summary: "Rota de exclusão de permissões",
      },
    },
    deletePermissionController
  );
}
