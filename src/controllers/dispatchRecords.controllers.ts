import { FastifyRequest, FastifyReply } from "fastify";
import {
  createDispatchRecordSchema,
  dispatchRecordIdSchema,
  getDispatchRecordSchema,
  updateDispatchRecordSchema,
} from "../schemas/dispatchRecords.schemas.js";
import {
  createDispatchRecordService,
  deleteDispatchRecordService,
  getDispatchRecordService,
  updateDispatchRecordService,
} from "../services/dispatchRecords.services.js";

export async function getDispatchRecordController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    id,
    branch_id,
    bonus_number,
    license_plate,
    nfe_number,
    seal_number,
  } = getDispatchRecordSchema.parse(request.query);

  const dispatchRecords = await getDispatchRecordService({
    id,
    branch_id,
    nfe_number,
    seal_number,
    bonus_number,
    license_plate,
  });

  return reply.status(200).send(dispatchRecords);
}

export async function createDispatchRecordController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const employeeId = request.user?.id;

  const { branch_id, nfe_number, bonus_number, seal_number, license_plate } =
    createDispatchRecordSchema.parse(request.body);

  const dispatchRecordCreated = await createDispatchRecordService(
    { branch_id, nfe_number, seal_number, bonus_number, license_plate },
    employeeId!
  );

  return reply.status(201).send(dispatchRecordCreated);
}

export async function updateDispatchRecordController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { branch_id, bonus_number, license_plate, nfe_number, seal_number } =
    updateDispatchRecordSchema.parse(request.body);

  const { id } = dispatchRecordIdSchema.parse(request.params);

  const dispatchRecordUpdated = await updateDispatchRecordService(
    { branch_id, nfe_number, seal_number, bonus_number, license_plate },
    { id }
  );

  return reply.status(200).send(dispatchRecordUpdated);
}

export async function deleteDispatchRecordController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = dispatchRecordIdSchema.parse(request.params);

  const dispatchRecordDeleted = await deleteDispatchRecordService({ id });

  return reply.status(200).send(dispatchRecordDeleted);
}
