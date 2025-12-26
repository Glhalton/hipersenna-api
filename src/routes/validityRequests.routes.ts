import { FastifyInstance } from "fastify";
import {
  createValidityRequestController,
  getValidityRequestsController,
  getMyValidityRequestsController,
  updateValidityRequestController,
} from "../controllers/validityRequests.controllers.js";
import { authorize } from "../middlewares/authorize.middleware.js";
import {
  createValidityRequestSchema,
  getValidityRequestsSchema,
  updateValidityRequestsSchema,
  validityRequestResponseSchema,
} from "../schemas/validityRequests.schemas.js";
import z from "zod";
import { createValidityRequestService } from "../services/validityRequests.services.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export default async function validityRequestsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate, authorize(31)],
      schema: {
        summary: "Rota de consulta de Solicitações de validade.",
        description: "Realiza a consulta de Solicitações de validade.",
        tags: ["Validity-Requests"],
        security: [{ BearerAuth: [] }],
        querystring: getValidityRequestsSchema,
        response: {
          200: z.array(validityRequestResponseSchema),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getValidityRequestsController
  );

  app.get(
    "/me",
    {
      preHandler: [authenticate],
      schema: {
        summary:
          "Rota de consulta de Solicitações de validade vinculada ao usuário que consultou.",
        description:
          "Realiza a consulta de Solicitações de validade vinculada ao usuario que consultou.",
        tags: ["Validity-Requests"],
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(validityRequestResponseSchema),
          400: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    getMyValidityRequestsController
  );

  app.post(
    "/",
    {
      preHandler: [authenticate, authorize(32)],
      schema: {
        summary: "Rota de criação de Solicitações de validade.",
        tags: ["Validity-Requests"],
        description: "Realiza a criação de Solicitações de validade.",
        security: [{ BearerAuth: [] }],
        body: createValidityRequestSchema,
        response: {
          201: validityRequestResponseSchema,
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    createValidityRequestController
  );

  app.patch(
    "/",
    {
      preHandler: [authenticate, authorize(33)],
      schema: {
        summary: "Rota de atualização de dados de Solicitações de validade.",
        description:
          "Realiza a atualização de dados de Solicitações de validade",
        tags: ["Validity-Requests"],
        security: [{ BearerAuth: [] }],
        body: updateValidityRequestsSchema,
        response: {
          200: z.object({ message: z.string() }),
          400: z.object({ message: z.string() }),
          403: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
          500: z.object({ message: z.string() }),
        },
      },
    },
    updateValidityRequestController
  );
}
