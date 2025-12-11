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
  try {
    const { id, branch_id, analyst_id, conferee_id, status } =
      getValidityRequestsSchema.parse(request.query);

    const validityRequests = await getValidityRequestsService({
      id,
      branch_id,
      analyst_id,
      conferee_id,
      status,
    });

    if (!validityRequests || validityRequests.length === 0) {
      return reply
        .status(404)
        .send({ message: "Solicitação de validade não encontrada!" });
    }

    return reply.status(200).send(validityRequests);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function getMyValidityRequestsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const userId = request.user?.id;
    const validityRequestsByEmployee = await getMyValidityRequestsService(
      userId!
    );

    if (!validityRequestsByEmployee || validityRequestsByEmployee.length == 0) {
      return reply.status(404).send({ message: "Nenhum dado foi encontrado!" });
    }

    return reply.status(200).send(validityRequestsByEmployee);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function createValidityRequestController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const userId = request.user?.id;
    if (!userId) {
      throw new Error("Id do usuário é inválido");
    }

    const validityRequestData = createValidityRequestSchema.parse(request.body);

    const createdValidityRequest = await createValidityRequestService(
      validityRequestData,
      userId
    );

    return reply.status(201).send(createdValidityRequest);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function updateValidityRequestController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const data = updateValidityRequestsSchema.parse(request.body);
    const validityRequestUpdate = await updateValidityRequestService(data);

    return reply.status(200).send({
      message: "Solicitação e produtos atualizados com sucesso",
    });
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}
