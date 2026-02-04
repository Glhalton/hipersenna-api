import { FastifyLogFn, FastifyReply, FastifyRequest } from "fastify";
import { createPushTokensSchema } from "../schemas/pushTokens.schemas.js";
import {
  createPushTokensService,
  deletePushTokensService,
  getPushTokensService,
} from "../services/pushTokens.services.js";

export async function getPushTokensController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const data = await getPushTokensService();

  return reply.status(200).send(data);
}

export async function createPushTokensController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const employee_id = request.user?.id;
  const { token, deviceId, platform } = createPushTokensSchema.parse(
    request.body,
  );

  await deletePushTokensService({ deviceId, employeeId: employee_id! });

  await createPushTokensService({ deviceId, platform, token }, employee_id!);

  return reply.status(201).send({ message: "Push Token criado com sucesso!" });
}

export async function deletePushTokensController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const employee_id = request.user?.id;
}
