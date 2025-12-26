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
        summary: "Rota de consulta de permissões.",
        description: "Realiza a consulta de permissões.",
        tags: ["Permissions"],
        security: [{ BearerAuth: [] }],
        querystring: getPermissionSchema,
        response: {
          200: z.array(permissionResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ messae: z.string() }),
        },
      },
    },
    getPermissionController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(4)],
      schema: {
        summary: "Rota de criação de permissões.",
        description: "Realiza a criação de permissões.",
        tags: ["Permissions"],
        security: [{ BearerAuth: [] }],
        body: permissionSchema,
        response: {
          201: permissionResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    createPermissionController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(5)],
      schema: {
        summary: "Rota de atualização de permissões.",
        description: "Realiza a atualização de dados de permissões.",
        tags: ["Permissions"],
        security: [{ BearerAuth: [] }],
        params: permissionIdSchema,
        body: updatePermissionSchema,
        response: {
          200: permissionResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    updatePermissionController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(6)],
      schema: {
        summary: "Rota de exclusão de permissões.",
        description: "Realiza a exclusão de permissões.",
        tags: ["Permissions"],
        security: [{ BearerAuth: [] }],
        params: permissionIdSchema,
        response: {
          200: permissionResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    deletePermissionController
  );
}
