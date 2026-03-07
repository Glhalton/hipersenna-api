import { FastifyReply, FastifyRequest } from "fastify";
import {
  createInventoryAdjustmentSchema,
  getInventoryAdjustmentsSchema,
  inventoryAdjustmentIdSchema,
  updateInventoryAdjustmentSchema,
} from "../schemas/inventoryAdjustments.schemas.js";
import {
  createInventoryAdjustmentService,
  getDetailedInventoryAdjustmentsService,
  getInventoryAdjustmentsService,
  updateInventoryAdjustmentService,
} from "../services/inventoryAdjustments.services.js";

export async function getInventoryAdjustmentsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const {
    branch_id,
    product_code,
    auxiliary_code,
    orderBy,
    cursor,
    limit,
    initial_date,
    final_date,
    status,
  } = getInventoryAdjustmentsSchema.parse(request.query);

  const permittedBranches = request.user?.permittedBranches;

  const data = await getInventoryAdjustmentsService(
    {
      branch_id,
      product_code,
      auxiliary_code,
      orderBy,
      cursor,
      limit,
      initial_date,
      final_date,
      status,
    },
    permittedBranches!,
  );

  return reply.status(200).send(data);
}

export async function getDetailedInventoryAdjustmentsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const permittedBranches = request.user?.permittedBranches;

  const { id } = inventoryAdjustmentIdSchema.parse(request.params);

  const data = await getDetailedInventoryAdjustmentsService(
    id,
    permittedBranches!,
  );

  return reply.status(200).send(data);
}

export async function createInventoryAdjustmentsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const permittedBranches = request.user?.permittedBranches;
  const userId = request.user?.id;
  const { branch_id, product_code, auxiliary_code, quantity } =
    createInventoryAdjustmentSchema.parse(request.body);

  const data = await createInventoryAdjustmentService(
    {
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
    },
    userId!,
    permittedBranches!,
  );

  return reply.status(201).send(data);
}

export async function updateInventoryAdjustmentController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const permittedBranches = request.user?.permittedBranches;
  const userId = request.user?.id;

  const { branch_id, product_code, auxiliary_code, quantity, status } =
    updateInventoryAdjustmentSchema.parse(request.body);
  const { id } = inventoryAdjustmentIdSchema.parse(request.params);

  const data = await updateInventoryAdjustmentService(
    {
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
      status,
    },
    id,
    userId!,
    permittedBranches!,
  );

  return reply.status(200).send(data);
}
