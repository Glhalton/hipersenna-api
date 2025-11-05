import { FastifyRequest, FastifyReply } from "fastify";
import {
  createValidityService,
  getValidityService,
  listValiditiesByEmployeeIdService,
} from '../services/validities.services.js';
import {
  createValiditySchema,
  getValiditySchema,
  productSchema,
  validityIdSchema,
} from '../schemas/validities.schemas.js';
import z from "zod";

export async function getValidityController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try { 
    const { id,branch_id, created_at, expiresDays, finalDate, initialDate, descricao  } = getValiditySchema.parse(request.query);
    const validity = await getValidityService({id, branch_id, created_at, expiresDays, finalDate, initialDate, descricao})
    if (!validity) {
      throw new Error("Validade não encontrada");
    }
    return reply.status(200).send(validity);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function getValidityByEmployeeController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const userId = request.user?.id;
    const validitiesByEmployee = await listValiditiesByEmployeeIdService(
      userId!
    );
    if (!validitiesByEmployee || validitiesByEmployee.length === 0) {
      throw new Error("Nenhuma validade encontrada");
    }
    return reply.status(200).send({ validitiesByEmployee });
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function createValidityController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const userId = request.user?.id;
    if (!userId) {
      throw new Error("O id do usuário é inválido");
    }

    const bodySchema = z.object({
      validity: createValiditySchema,
      products: z.array(productSchema),
    });

    const { validity, products } = bodySchema.parse(request.body);
    const createdValidity = await createValidityService({
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
