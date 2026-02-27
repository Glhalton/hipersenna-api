import { FastifyInstance } from "fastify";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import {
  createRuptureProductsSchema,
  getRuptureProductsResponseSchema,
  getRuptureProductsSchema,
  ruptureProductsIdSchema,
  ruptureProductsResponseSchema,
  updateRuptureProductsSchema,
} from "../schemas/ruptureProducts.schemas.js";
import z from "zod";
import { validationErrorSchema } from "../schemas/errors.schemas.js";
import {
  createRuptureProductsController,
  deleteRuptureProductsController,
  getRuptureProductsController,
  updateRuptureProductsController,
} from "../controllers/ruptureProducts.controllers.js";

export default async function ruptureProductsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de consulta de produtos de ruptura.",
        description: "Realiza a consulta de produtos de ruptura.",
        tags: ["Rupture-Products"],
        security: [{ BearerAuth: [] }],
        querystring: getRuptureProductsSchema,
        response: {
          200: getRuptureProductsResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ messae: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    getRuptureProductsController,
  );
  app.post(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de criação de produtos de ruptura.",
        description: "Realiza a criação de produtos de ruptura.",
        tags: ["Rupture-Products"],
        security: [{ BearerAuth: [] }],
        body: createRuptureProductsSchema,
        response: {
          201: ruptureProductsResponseSchema.describe("Created"),
          400: validationErrorSchema.describe("Bad Request"),
          401: z.object({ message: z.string() }).describe("Unauthorized"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    createRuptureProductsController,
  );
  app.patch(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de atualização de produtos de ruptura.",
        description: "Realiza a atualização de produtos de ruptura.",
        tags: ["Rupture-Products"],
        security: [{ BearerAuth: [] }],
        params: ruptureProductsIdSchema,
        body: updateRuptureProductsSchema,
        response: {
          200: ruptureProductsResponseSchema.describe("Ok"),
          400: validationErrorSchema.describe("Bad Request"),
          403: z.object({ message: z.string() }).describe("Forbidden"),
          404: z.object({ message: z.string() }).describe("Not Found"),
          500: z
            .object({ message: z.string() })
            .describe("Internal Server Error"),
        },
      },
    },
    updateRuptureProductsController,
  );
  app.delete(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        summary: "Rota de exclusão de produtos de ruptura.",
        description: "Realiza a exclusão de produtos de ruptura",
        tags: ["Rupture-Products"],
        security: [{ BearerAuth: [] }],
        params: ruptureProductsIdSchema,
        response: {
          200: ruptureProductsResponseSchema.describe("Ok"),
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
    deleteRuptureProductsController,
  );
}
