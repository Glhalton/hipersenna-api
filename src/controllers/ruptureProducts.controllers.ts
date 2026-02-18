import { FastifyReply, FastifyRequest } from "fastify";
import {
  createRuptureProductsSchema,
  getRuptureProductsSchema,
  ruptureProductsIdSchema,
  updateRuptureProductsSchema,
} from "../schemas/ruptureProducts.schemas.js";
import {
  createRuptureProductsService,
  deleteRuptureProductsService,
  getRuptureProductsService,
  updateRuptureProductsService,
} from "../services/ruptureProducts.services.js";

export async function getRuptureProductsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { auxiliaryCode, branchId, orderBy, cursor, limit, productCode } =
    getRuptureProductsSchema.parse(request.query);

  const data = await getRuptureProductsService({
    branchId,
    productCode,
    auxiliaryCode,
    orderBy,
    cursor,
    limit,
  });

  return reply.status(200).send(data);
}

export async function createRuptureProductsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const employeeId = request.user?.id;

  const { branchId, productCode, auxiliaryCode } =
    createRuptureProductsSchema.parse(request.body);

  const data = await createRuptureProductsService(
    {
      branchId,
      productCode,
      auxiliaryCode,
    },
    employeeId!,
  );

  return reply.status(201).send(data);
}

export async function updateRuptureProductsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = ruptureProductsIdSchema.parse(request.params);
  const { branchId, productCode, auxiliaryCode } =
    updateRuptureProductsSchema.parse(request.body);

  const data = await updateRuptureProductsService(
    { branchId, productCode, auxiliaryCode },
    id,
  );

  return reply.status(200).send(data);
}

export async function deleteRuptureProductsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = ruptureProductsIdSchema.parse(request.params);

  const data = await deleteRuptureProductsService(id);

  return reply.status(200).send(data);
}
