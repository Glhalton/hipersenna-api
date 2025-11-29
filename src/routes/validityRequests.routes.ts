import { FastifyInstance } from "fastify";
import {
  createValidityRequestController,
  getValidityRequestsController,
  getMyValidityRequestsController,
  updateValidityRequestController,
} from "../controllers/validityRequests.controllers.js";
import { authorizePermissions } from "../middlewares/authorizePermissions.js";
import {
  createValidityRequestSchema,
  getValidityRequestsSchema,
  updateValidityRequestsSchema,
  validityRequestResponseSchema,
} from "../schemas/validityRequests.schemas.js";
import z from "zod";
import { createValidityRequestService } from "../services/validityRequests.services.js";

export default async function validityRequestsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    {
      preHandler: authorizePermissions(31),
      schema: {
        description: "Realiza a consulta de Solicitações de validade.",
        security: [{ BearerAuth: [] }],
        querystring: getValidityRequestsSchema,
        response: {
          200: z.array(validityRequestResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Validity-Requests"],
        summary: "Rota de consulta de Solicitações de validade.",
      },
    },
    getValidityRequestsController
  );

  app.get(
    "/me",
    {
      schema: {
        description:
          "Realiza a consulta de Solicitações de validade vinculada ao usuario que consultou.",
        security: [{ BearerAuth: [] }],
        response: {
          200: z.array(validityRequestResponseSchema),
          404: z.object({ message: z.string() }),
        },
        tags: ["Validity-Requests"],
        summary:
          "Rota de consulta de Solicitações de validade vinculada ao usuário que consultou.",
      },
    },
    getMyValidityRequestsController
  );

  app.post(
    "/",
    {
      preHandler: authorizePermissions(32),
      schema: {
        description: "Realiza a criação de Solicitações de validade.",
        security: [{ BearerAuth: [] }],
        body: createValidityRequestSchema,
        response: {
          201: validityRequestResponseSchema,
        },
        tags: ["Validity-Requests"],
        summary: "Rota de criação de Solicitações de validade.",
      },
    },
    createValidityRequestController
  );

  app.patch(
    "/",
    {
      preHandler: authorizePermissions(33),
      schema: {
        description:
          "Realiza a atualização de dados de Solicitações de validade",
        security: [{ BearerAuth: [] }],
        body: updateValidityRequestsSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
        tags: ["Validity-Requests"],
        summary: "Rota de atualização de dados de Solicitações de validade.",
      },
    },
    updateValidityRequestController
  );
}
