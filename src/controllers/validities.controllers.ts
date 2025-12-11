import { FastifyRequest, FastifyReply } from "fastify";
import {
  createValidityService,
  getValidityService,
  getMyValiditiesService,
  updateValidityService,
} from "../services/validities.services.js";
import {
  createValiditySchema,
  getValiditySchema,
  updateValiditySchema,
  validityIdSchema,
} from "../schemas/validities.schemas.js";
import z from "zod";

export async function getValidityController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const {
      id,
      branch_id,
      created_at,
      expiresDays,
      finalDate,
      initialDate,
      descricao,
    } = getValiditySchema.parse(request.query);
    const validity = await getValidityService({
      id,
      branch_id,
      created_at,
      expiresDays,
      finalDate,
      initialDate,
      descricao,
    });
    if (!validity || validity.length == 0) {
      return reply.status(404).send({ message: "Validade não encontrada" });
    }

    return reply.status(200).send(validity);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function getMyValiditiesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const userId = request.user?.id;
    const validitiesByEmployee = await getMyValiditiesService(userId!);
    if (!validitiesByEmployee || validitiesByEmployee.length === 0) {
      return reply.status(404).send({ message: "Validade não encontrada" });
    }
    return reply.status(200).send(validitiesByEmployee);
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
    const validity = createValiditySchema.parse(request.body);
    const createdValidity = await createValidityService(validity, userId);

    return reply.status(201).send(createdValidity);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function updateValidityController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const data = updateValiditySchema.parse(request.body);

    const updatedData = updateValidityService(data);
  
    return reply.status(200).send({
      message: "Dados atualizados com sucesso!",
    });
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}
