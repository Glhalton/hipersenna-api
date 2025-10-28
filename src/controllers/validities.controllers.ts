import { FastifyRequest, FastifyReply } from "fastify";
import {
  createValidityService,
  getAllValidities,
  getValidityService,
  listValiditiesByEmployeeIdService,
} from "../services/validities.services";
import {
  createValiditySchema,
  productSchema,
  validityIdSchema,
} from "../schemas/validities.schemas";
import z from "zod";

export async function getAllValiditiesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const validities = await getAllValidities();
    if (!validities || validities.length === 0) {
      throw new Error("Nenhuma validade encontrada");
    }
    return reply.status(200).send(validities);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function getValidityController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try { 
    const { id } = validityIdSchema.parse(request.params);
    console.log(id)
    const validity = await getValidityService(id);
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
