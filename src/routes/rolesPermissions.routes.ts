import { FastifyInstance } from "fastify";
import {
  createRolePermissionsController,
  deleteRolePermissionController,
  getRolePermissionsController,
} from "../controllers/rolesPermissions.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  roleIdSchema,
  rolePermissionResponseSchema,
  rolePermissionSchema,
} from "../schemas/rolesPermissions.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function rolesPermissionsRoutes(app: FastifyInstance) {
  app.get(
    "/:id",
    {
      preHandler: [authenticate, authorize(12)],
      schema: {
        description: "Realiza a consulta de permissões vinculadas a um cargo.",
        security: [{ BearerAuth: [] }],
        params: roleIdSchema,
        response: {
          200: z.array(rolePermissionResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Role-Permissions"],
        summary: "Rota de consulta de permissões de cargos.",
      },
    },
    getRolePermissionsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(13)],
      schema: {
        description: "Vincula permissões a um determinado cargo.",
        security: [{ BearerAuth: [] }],
        body: rolePermissionSchema,
        response: {
          201: z.object({ message: z.string() }),
        },
        tags: ["Role-Permissions"],
        summary: "Rota de liberação de permissões a cargos.",
      },
    },
    createRolePermissionsController
  );

  app.delete(
    "/",
    {
      preHandler: [authenticate, authorize(14)],
      schema: {
        description:
          "Realiza a exclusão de permissões em um determinado cargo.",
        security: [{ BearerAuth: [] }],
        body: rolePermissionSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
        tags: ["Role-Permissions"],
        summary: "Rota de exclusão de permissões em um determinado cargo.",
      },
    },
    deleteRolePermissionController
  );
}
