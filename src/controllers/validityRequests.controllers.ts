import { FastifyRequest, FastifyReply } from "fastify";
import {
  createValidityRequestService,
  getValidityRequestsService,
  getMyValidityRequestsService,
  updateValidityRequestService,
} from "../services/validityRequests.services.js";
import {
  createValidityRequestSchema,
  getValidityRequestsSchema,
  updateValidityRequestsSchema,
} from "../schemas/validityRequests.schemas.js";

export async function getValidityRequestsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id, branch_id, analyst_id, conferee_id, status } =
    getValidityRequestsSchema.parse(request.query);

  const validityRequests = await getValidityRequestsService({
    id,
    branch_id,
    analyst_id,
    conferee_id,
    status,
  });

  return reply.status(200).send(validityRequests);
}

export async function getMyValidityRequestsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = request.user?.id;
  const validityRequestsByEmployee = await getMyValidityRequestsService(
    userId!
  );

  return reply.status(200).send(validityRequestsByEmployee);
}

export async function createValidityRequestController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userId = request.user?.id;

  const validityRequestData = createValidityRequestSchema.parse(request.body);

  const createdValidityRequest = await createValidityRequestService(
    validityRequestData,
    userId!
  );

  return reply.status(201).send(createdValidityRequest);
}

export async function updateValidityRequestController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = updateValidityRequestsSchema.parse(request.body);
  const validityRequestUpdate = await updateValidityRequestService(data);

  return reply.status(200).send({
    message: "Solicitação e produtos atualizados com sucesso",
  });
}
