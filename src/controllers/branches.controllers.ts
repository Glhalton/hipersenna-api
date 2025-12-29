import { FastifyRequest, FastifyReply } from "fastify";
import {
  branchDescriptionSchema,
  branchesIdSchema,
  getBranchesSchema,
} from "../schemas/branches.schemas.js";
import {
  createBranchesService,
  deleteBranchesService,
  getBranchesService,
  updateBranchesService,
} from "../services/branches.services.js";

export async function getBranchesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = getBranchesSchema.parse(request.query);

  const branches = await getBranchesService({ id });

  return reply.status(200).send(branches);
}

export async function createBranchesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { description } = branchDescriptionSchema.parse(request.body);

  const branchCreated = await createBranchesService({ description });

  return reply.status(201).send(branchCreated);
}

export async function updateBranchesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = branchesIdSchema.parse(request.params);
  const { description } = branchDescriptionSchema.parse(request.body);

  const branchUpdated = await updateBranchesService({ description }, id);

  return reply.status(200).send(branchUpdated);
}

export async function deleteBranchesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = branchesIdSchema.parse(request.params);

  const branchDeleted = await deleteBranchesService({ id });

  return reply.status(200).send(branchDeleted);
}
