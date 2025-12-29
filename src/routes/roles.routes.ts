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
import { validationErrorSchema } from "../schemas/errors.schemas.js";

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
          200: z.array(roleResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
          201: roleResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
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
          200: roleResponseSchema.describe("Ok"),
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
          200: roleResponseSchema.describe("Ok"),
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
    deleteRoleController
  );
}
