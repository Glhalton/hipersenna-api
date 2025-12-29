import { FastifyInstance } from "fastify";
import {
  createBranchesController,
  deleteBranchesController,
  getBranchesController,
  updateBranchesController,
} from "../controllers/branches.controllers.js";
import {
  branchDescriptionSchema,
  branchesIdSchema,
  branchesResponseSchema,
  getBranchesSchema,
} from "../schemas/branches.schemas.js";
import z from "zod";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function branchesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de filiais",
        description: "Realiza a consulta de filiais",
        tags: ["Branches"],
        security: [{ BearerAuth: [] }],
        querystring: getBranchesSchema,
        response: {
          200: z.array(branchesResponseSchema).describe("Ok"),
          400: z.object({ message: z.string() }).describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getBranchesController
  );
  app.post(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de criação de filiais",
        description: "Realiza a criação de filiais",
        tags: ["Branches"],
        security: [{ BearerAuth: [] }],
        body: branchDescriptionSchema,
        response: {
          201: branchesResponseSchema.describe("Created"),
          400: z.object({ message: z.string() }).describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createBranchesController
  );
  app.patch(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de atualização de dados de filiais",
        description: "Realiza a atualização de dados de filiais",
        tags: ["Branches"],
        security: [{ BearerAuth: [] }],
        params: branchesIdSchema,
        body: branchDescriptionSchema,
        response: {
          200: branchesResponseSchema.describe("Ok"),
          400: z.object({ message: z.string() }).describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    updateBranchesController
  );
  app.delete(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de exlusão de filiais",
        description: "Realiza a exclusão de filiais",
        tags: ["Branches"],
        security: [{ BearerAuth: [] }],
        params: branchesIdSchema,
        response: {
          200: branchesResponseSchema.describe("Ok"),
          400: z.object({ message: z.string() }).describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    deleteBranchesController
  );
}
