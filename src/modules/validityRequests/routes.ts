import { FastifyInstance } from "fastify";
import {
  validityRequestSchema,
  validityRequestProductSchema,
  validityRequestUpdateSchema,
} from "./schema.js";
import {
  createValidityRequest,
  listValidityRequestsByEmployeeId,
  updateValidityRequest,
} from "./service.js";
import { prisma } from "../../lib/prisma.js";
import z from "zod";
import { authorizePermissions } from "../../middlewares/authorizePermissions.js";

export default async function validityRequestsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    { preHandler: authorizePermissions(16) },
    async (request, reply) => {
      try {
        const validityRequests = await prisma.hsvalidity_requests.findMany();

        if (!validityRequests || validityRequests.length === 0) {
          throw new Error("Nenhuma solicitação de validade encontrada");
        }

        return reply.status(200).send(validityRequests);
      } catch (error: any) {
        return reply.status(400).send({ message: `${error.message}` });
      }
    }
  );

  app.get(
    "/employee",
    { preHandler: authorizePermissions(17) },
    async (request, reply) => {
      try {
        const userId = request.user?.id;
        const validityRequestsByEmployee =
          await listValidityRequestsByEmployeeId(userId!);
        return reply.status(200).send({ validityRequestsByEmployee });
      } catch (error: any) {
        return reply.status(400).send({ message: `${error.message}` });
      }
    }
  );

  app.post(
    "/",
    { preHandler: authorizePermissions(18) },
    async (request, reply) => {
      try {
        const userId = request.user?.id;
        if (!userId) {
          throw new Error("Id do usuário é inválido");
        }

        const bodySchema = z.object({
          validityRequest: validityRequestSchema,
          requestProducts: z.array(validityRequestProductSchema),
        });

        const { validityRequest, requestProducts } = bodySchema.parse(
          request.body
        );

        const createdValidityRequest = await createValidityRequest({
          validityRequest,
          requestProducts,
          userId,
        });

        return reply.status(201).send({
          message: "Solicitação de validade criada com sucesso!",
          createdValidityRequest,
        });
      } catch (error: any) {
        return reply.status(400).send({ message: `${error.message}` });
      }
    }
  );

  app.patch(
    "/",
    { preHandler: authorizePermissions(19) },
    async (request, reply) => {
      try {
        const data = validityRequestUpdateSchema.parse(request.body);
        const validityRequestUpdate = await updateValidityRequest(data);

        return reply.status(200).send({
          message: "Solicitação e produtos atualizados com sucesso",
          validityRequestUpdate,
        });
      } catch (error: any) {
        return reply.status(400).send({ message: `${error.message}` });
      }
    }
  );
}
