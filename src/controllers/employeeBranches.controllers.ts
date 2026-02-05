import { FastifyReply, FastifyRequest } from "fastify";
import {
  employeeBranchesSchema,
  employeeId,
} from "../schemas/employeeBranches.schemas.js";
import {
  createEmployeeBranchesService,
  deleteEmployeeBranchesService,
  getEmployeeBranchesService,
} from "../services/employeeBranches.services.js";

export async function getEmployeeBranchesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = employeeId.parse(request.params);
  const branches = await getEmployeeBranchesService(id);

  return reply.status(200).send(branches);
}

export async function createEmployeeBranchesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { employee_id, branch_id } = employeeBranchesSchema.parse(request.body);

  const employeeBranches = await createEmployeeBranchesService({
    employee_id,
    branch_id,
  });

  return reply.status(201).send({ message: "Filiais liberadas com sucesso!" });
}

export async function deleteEmployeeBranchesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { employee_id, branch_id } = employeeBranchesSchema.parse(request.body);

  const permissionsDeleted = await deleteEmployeeBranchesService({
    employee_id,
    branch_id,
  });

  return reply.status(200).send({ message: "Filiais removidas com sucesso!" });
}
