import { FastifyInstance } from "fastify";
import {
  createRoleController,
  deleteRoleController,
  getRoleController,
  updateRoleController,
} from "../controllers/roles.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  getRoleSchema,
  roleIdSchema,
  roleResponseSchema,
  roleSchema,
  updateRoleSchema,
} from "../schemas/roles.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function rolesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(8)],
      schema: {
        summary: "Rota de consulta de cargos.",
        description: "Realiza a consulta de cargos.",
        tags: ["Roles"],
        security: [{ BearerAuth: [] }],
        querystring: getRoleSchema,
        response: {
          200: z.array(roleResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getRoleController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(9)],
      schema: {
        summary: "Rota de criação de cargos.",
        description: "Realiza a criação de cargos.",
        tags: ["Roles"],
        security: [{ BearerAuth: [] }],
        body: roleSchema,
        response: {
          201: roleResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    createRoleController
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(10)],
      schema: {
        summary: "Rota de atualização de dados de um cargo.",
        description: "Realiza a atualização de dados de um cargo.",
        tags: ["Roles"],
        security: [{ BearerAuth: [] }],
        params: roleIdSchema,
        body: updateRoleSchema,
        response: {
          200: roleResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    updateRoleController
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(11)],
      schema: {
        summary: "Rota de exclusão de cargos.",
        description: "Realiza a exlusão de cargos.",
        tags: ["Roles"],
        security: [{ BearerAuth: [] }],
        params: roleIdSchema,
        response: {
          200: roleResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    deleteRoleController
  );
}
