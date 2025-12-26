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
  const {
    id,
    branch_id,
    initialCreationDate,
    finalCreationDate,
    initialValidityDate,
    finalValidityDate,
    expiresDays,
    descricao,
  } = getValiditySchema.parse(request.query);

  const validity = await getValidityService({
    id,
    branch_id,
    initialCreationDate,
    finalCreationDate,
    initialValidityDate,
    finalValidityDate,
    expiresDays,
    descricao,
  });

  return reply.status(200).send(validity);
}

export async function getMyValiditiesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = request.user?.id;
  const validitiesByEmployee = await getMyValiditiesService(userId!);
  return reply.status(200).send(validitiesByEmployee);
}

export async function createValidityController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = request.user?.id;

  const validity = createValiditySchema.parse(request.body);
  const createdValidity = await createValidityService(validity, userId!);

  return reply.status(201).send(createdValidity);
}

export async function updateValidityController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = updateValiditySchema.parse(request.body);

  const updatedData = updateValidityService(data);

  return reply.status(200).send({
    message: "Dados atualizados com sucesso!",
  });
}
