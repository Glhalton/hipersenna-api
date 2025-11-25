import { FastifyInstance } from "fastify";
import {
  createRoleController,
  deleteRoleController,
  getRoleController,
  updateRoleController,
} from "../controllers/roles.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import {
  getRoleSchema,
  roleIdSchema,
  roleResponseSchema,
  roleSchema,
  updateRoleSchema,
} from "../schemas/roles.schemas.js";
import z from "zod";

export default async function rolesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authorizePermissions(9),
      schema: {
        description: "Realiza a consulta de cargos.",
        security: [{ BearerAuth: [] }],
        querystring: getRoleSchema,
        response: {
          200: roleResponseSchema,
          404: z.object({ message: z.string() }),
        },
        tags: ["Roles"],
        summary: "Rota de consulta de cargos.",
      },
    },
    getRoleController
  );

  app.post(
    "/",
    {
      preHandler: authorizePermissions(10),
      schema: {
        description: "Realiza a criação de cargos.",
        security: [{ BearerAuth: [] }],
        body: roleSchema,
        response: {
          201: roleResponseSchema,
        },
        tags: ["Roles"],
        summary: "Rota de criação de cargos.",
      },
    },
    createRoleController
  );

  app.patch(
    "/:id",
    {
      preHandler: authorizePermissions(12),
      schema: {
        description: "Realiza a atualização de dados de um cargo.",
        security: [{ BearerAuth: [] }],
        params: roleIdSchema,
        body: updateRoleSchema,
        response: {
          200: roleResponseSchema,
          404: z.object({ message: z.string() }),
        },
        tags: ["Roles"],
        summary: "Rota de atualização de dados de um cargo.",
      },
    },
    updateRoleController
  );

  app.delete(
    "/:id",
    {
      preHandler: authorizePermissions(11),
      schema: {
        description: "Realiza a exlusão de cargos.",
        security: [{ BearerAuth: [] }],
        params: roleIdSchema,
        response: {
          200: roleResponseSchema,
          404: z.object({ message: z.string() }),
        },
        tags: ["Roles"],
        summary: "Rota de exclusão de cargos.",
      },
    },
    deleteRoleController
  );
}
