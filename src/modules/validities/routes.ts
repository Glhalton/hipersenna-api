import { FastifyInstance } from "fastify";
import {
  createValidity,
  listValiditiesByEmployeeId,
  getValidityById,
} from "./service.js";
import {
  createValidityBodySchema,
  getValidityParamSchema,
  createValidityProductBodySchema,
} from "./schema.js";
import { prisma } from "../../lib/prisma.js";
import z from "zod";
import { authorizePermissions } from "../../middlewares/authorizePermissions.js";

export default async function validitiesRoutes(app: FastifyInstance) {
  app.get(
    "/",
    { preHandler: authorizePermissions(20) },
    async (request, reply) => {
      try {
        const validities = await prisma.hsvalidities.findMany();
        if (!validities || validities.length === 0) {
          throw new Error("Nenhuma validade encontrada");
        }
        return reply.status(200).send(validities);
      } catch (error: any) {
        return reply.status(400).send({ message: `${error.message}` });
      }
    }
  );

  app.get(
    "/id/:id",
    { preHandler: authorizePermissions(21) },
    async (request, reply) => {
      try {
        const { validityId } = getValidityParamSchema.parse(request.params);
        const validity = await getValidityById(validityId);
        if (!validity) {
          throw new Error("Validade não encontrada");
        }
        return reply.status(200).send(validity);
      } catch (error: any) {
        return reply.status(400).send({ message: `${error.message}` });
      }
    }
  );

  app.get("/employee", async (request, reply) => {
    try {
      const userId = request.user?.id;
      const validitiesByEmployee = await listValiditiesByEmployeeId(userId!);
      if (!validitiesByEmployee || validitiesByEmployee.length === 0) {
        throw new Error("Nenhuma validade encontrada");
      }
      return reply.status(200).send({ validitiesByEmployee });
    } catch (error: any) {
      return reply.status(400).send({ message: `${error.message}` });
    }
  });

  app.post(
    "/",
    { preHandler: authorizePermissions(22) },
    async (request, reply) => {
      try {
        const userId = request.user?.id;
        if (!userId) {
          throw new Error("O id do usuário é inválido");
        }

        const bodySchema = z.object({
          validity: createValidityBodySchema,
          products: z.array(createValidityProductBodySchema),
        });

        const { validity, products } = bodySchema.parse(request.body);
        const createdValidity = await createValidity({
          validity,
          products,
          userId,
        });

        return reply.status(201).send({
          message: "Validade criada com sucesso",
          createdValidity,
        });
      } catch (error: any) {
        return reply.status(400).send({ message: `${error.message}` });
      }
    }
  );
}
