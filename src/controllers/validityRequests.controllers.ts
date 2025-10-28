import { FastifyRequest, FastifyReply } from "fastify";
import {
  createValidityRequestService,
  getAllValidityRequestService,
  listValidityRequestsByEmployeeIdService,
  updateValidityRequestService,
} from "../services/validityRequests.services";
import z from "zod";
import {
  updateValidityRequestsSchema,
  validityRequestProductSchema,
  validityRequestSchema,
} from "../schemas/validityRequests.schemas";

export async function getAllValidityRequestsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const validityRequests = await getAllValidityRequestService();

    if (!validityRequests || validityRequests.length === 0) {
      throw new Error("Nenhuma solicitação de validade encontrada");
    }

    return reply.status(200).send(validityRequests);
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}

export async function listValidityRequestsByEmployeeIdController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const userId = request.user?.id;
    const validityRequestsByEmployee =
      await listValidityRequestsByEmployeeIdService(userId!);
    return reply.status(200).send({ validityRequestsByEmployee });
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

    const bodySchema = z.object({
      validityRequest: validityRequestSchema,
      requestProducts: z.array(validityRequestProductSchema),
    });

    const { validityRequest, requestProducts } = bodySchema.parse(request.body);

    const createdValidityRequest = await createValidityRequestService({
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

export async function updateValidityRequestController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const data = updateValidityRequestsSchema.parse(request.body);
    const validityRequestUpdate = await updateValidityRequestService(data);

    return reply.status(200).send({
      message: "Solicitação e produtos atualizados com sucesso",
      validityRequestUpdate,
    });
  } catch (error: any) {
    return reply.status(400).send({ message: `${error.message}` });
  }
}
