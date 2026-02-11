import { FastifyReply, FastifyRequest } from "fastify";
import {
  createDepartmentSchema,
  departmentId,
  getDepartmentSchema,
  updateDepartmentSchema,
} from "../schemas/departments.schemas.js";
import {
  createDepartmentService,
  deleteDepartmentService,
  getDepartmentService,
  updateDepartmentService,
} from "../services/departments.services.js";

export async function getDepartmentController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id, winthor_id, description } = getDepartmentSchema.parse(
    request.query,
  );

  const data = await getDepartmentService({ id, winthor_id, description });

  return reply.status(200).send(data);
}

export async function createDepartmentController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { winthor_id, description } = createDepartmentSchema.parse(
    request.body,
  );

  const data = await createDepartmentService({ winthor_id, description });

  return reply.status(201).send(data);
}

export async function updateDepartmentController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = departmentId.parse(request.params);
  const { winthor_id, description } = updateDepartmentSchema.parse(
    request.body,
  );

  const data = await updateDepartmentService({ winthor_id, description }, id);

  return reply.status(200).send(data);
}

export async function deleteDepartmentController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = departmentId.parse(request.params);

  const data = await deleteDepartmentService(id);

  return reply.status(200).send(data);
}
