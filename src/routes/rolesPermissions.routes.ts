import { FastifyInstance } from "fastify";
import {
  createRolePermissionsController,
  deleteRolePermissionController,
  getRolePermissionsController,
} from "../controllers/rolesPermissions.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import {
  roleIdSchema,
  rolePermissionResponseSchema,
  rolePermissionSchema,
} from "../schemas/rolesPermissions.schemas.js";
import z from "zod";

export default async function rolesPermissionsRoutes(app: FastifyInstance) {
  app.get(
    "/:id",
    {
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
      preHandler: authorizePermissions(14),
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
      preHandler: authorizePermissions(26),
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
