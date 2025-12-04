import { FastifyInstance } from "fastify";
import {
  createPermissionController,
  deletePermissionController,
  getPermissionController,
  updatePermissionController,
} from "../controllers/permissions.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  getPermissionSchema,
  permissionIdSchema,
  permissionResponseSchema,
  permissionSchema,
  updatePermissionSchema,
} from "../schemas/permissions.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function permissionsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(3)],
      schema: {
        description: "Realiza a consulta de permissões.",
        security: [{ BearerAuth: [] }],
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
      preHandler: [authenticate, authorize(4)],
      schema: {
        description: "Realiza a criação de permissões.",
        security: [{ BearerAuth: [] }],
        body: permissionSchema,
        response: {
          201: permissionResponseSchema,
        },
        tags: ["Permissions"],
        summary: "Rota de criação de permissões.",
      },
    },
    createPermissionController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(5)],
      schema: {
        description: "Realiza a atualização de dados de permissões.",
        security: [{ BearerAuth: [] }],
        params: permissionIdSchema,
        body: updatePermissionSchema,
        response: {
          200: permissionResponseSchema,
        },
        tags: ["Permissions"],
        summary: "Rota de atualização de permissões.",
      },
    },
    updatePermissionController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(6)],
      schema: {
        description: "Realiza a exclusão de permissões.",
        security: [{ BearerAuth: [] }],
        params: permissionIdSchema,
        response: {
          200: permissionResponseSchema,
        },
        tags: ["Permissions"],
        summary: "Rota de exclusão de permissões.",
      },
    },
    deletePermissionController
  );
}
