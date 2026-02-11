import { FastifyInstance } from "fastify";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  createDepartmentSchema,
  departmentId,
  departmentResponseSchema,
  getDepartmentSchema,
} from "../schemas/departments.schemas.js";
import z from "zod";
import { validationErrorSchema } from "../schemas/errors.schemas.js";
import {
  createDepartmentController,
  deleteDepartmentController,
  getDepartmentController,
  updateDepartmentController,
} from "../controllers/departments.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";

export default function departmentRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de departamentos.",
        description: "Realiza a consulta de departamentos.",
        tags: ["Departments"],
        security: [{ BearerAuth: [] }],
        querystring: getDepartmentSchema,
        response: {
          200: z.array(departmentResponseSchema).describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z.object({ messae: z.string() }),
        },
      },
    },
    getDepartmentController,
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(51)],
      schema: {
        summary: "Rota de criação de departamentos.",
        description: "Realiza a criação de departamentos.",
        tags: ["Departments"],
        security: [{ BearerAuth: [] }],
        body: createDepartmentSchema,
        response: {
          201: departmentResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createDepartmentController,
  );

  app.patch(
    "/:id",
    {
      preHandler: [authenticate, authorize(52)],
      schema: {
        summary: "Rota de atualização de departamentos.",
        description: "Realiza a atualização dos dados de departamentos.",
        tags: ["Departments"],
        security: [{ BearerAuth: [] }],
        params: departmentId,
        response: {
          200: departmentResponseSchema.describe("Ok"),
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
    updateDepartmentController,
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate, authorize(53)],
      schema: {
        summary: "Rota de exclusão de departamentos.",
        description: "Realiza a exclusão de departamentos",
        tags: ["Departments"],
        security: [{ BearerAuth: [] }],
        params: departmentId,
        response: {
          200: departmentResponseSchema.describe("Ok"),
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
    deleteDepartmentController,
  );
}
