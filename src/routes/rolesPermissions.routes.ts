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
import { validationErrorSchema } from "../schemas/errors.schemas.js";

export default async function rolesPermissionsRoutes(app: FastifyInstance) {
  app.get(
    "/:id",
    {
      preHandler: [authenticate, authorize(12)],
      schema: {
        description: "Realiza a consulta de permissões vinculadas a um cargo.",
        summary: "Rota de consulta de permissões de cargos.",
        tags: ["Role-Permissions"],
        security: [{ BearerAuth: [] }],
        params: roleIdSchema,
        response: {
          200: z.array(rolePermissionResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getRolePermissionsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(13)],
      schema: {
        summary: "Rota de liberação de permissões a cargos.",
        description: "Vincula permissões a um determinado cargo.",
        tags: ["Role-Permissions"],
        security: [{ BearerAuth: [] }],
        body: rolePermissionSchema,
        response: {
          201: z.object({ message: z.string() }).describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createRolePermissionsController
  );

  app.delete(
    "/",
    {
      preHandler: [authenticate, authorize(14)],
      schema: {
        summary: "Rota de exclusão de permissões em um determinado cargo.",
        description:
          "Realiza a exclusão de permissões em um determinado cargo.",
        tags: ["Role-Permissions"],
        security: [{ BearerAuth: [] }],
        body: rolePermissionSchema,
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
    deleteRolePermissionController
  );
}
