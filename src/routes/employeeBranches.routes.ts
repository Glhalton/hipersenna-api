import { FastifyInstance } from "fastify";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { userIdSchema } from "../schemas/users.schemas.js";
import z from "zod";
import {
  employeeBranchesResponseSchema,
  employeeBranchesSchema,
} from "../schemas/employeeBranches.schemas.js";
import { validationErrorSchema } from "../schemas/errors.schemas.js";
import {
  createEmployeeBranchesController,
  deleteEmployeeBranchesController,
  getEmployeeBranchesController,
} from "../controllers/employeeBranches.controllers.js";

export default async function employeeBranchesRoutes(app: FastifyInstance) {
  app.get(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de filiais do usuário.",
        description:
          "Realiza a consulta de filiais vinculadas a um determinado usuário.",
        tags: ["User-Branches"],
        security: [{ BearerAuth: [] }],
        params: userIdSchema,
        response: {
          200: z.array(employeeBranchesResponseSchema).describe("OK"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getEmployeeBranchesController,
  );

  app.post(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de liberação de filiais para usuários.",
        description: "Realiza a liberação de filiais a um determinado usuário.",
        tags: ["User-Branches"],
        security: [{ BearerAuth: [] }],
        body: employeeBranchesSchema,
        response: {
          201: z.object({ message: z.string() }).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createEmployeeBranchesController,
  );

  app.delete(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de exclusão de filiais de usuários.",
        description: "Realiza exclusão de filiais de um determinado usuário",
        tags: ["User-Branches"],
        body: employeeBranchesSchema,
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
    deleteEmployeeBranchesController,
  );
}
