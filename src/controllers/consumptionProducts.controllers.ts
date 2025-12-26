import { FastifyReply, FastifyRequest } from "fastify";
import {
  consumptionProductsId,
  createConsumptionProductsSchema,
  getConsumptionProductsSchema,
  updateConsumptionProductsSchema,
} from "../schemas/consumptionProducts.schemas.js";
import {
  createconsumptionProductsService,
  deleteconsumptionProductsService,
  existingconsumptionProducts,
  getconsumptionProductsService,
  updateconsumptionProductsService,
} from "../services/consumptionProducts.services.js";

export async function getconsumptionProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const {
    id,
    employee_id,
    branch_id,
    product_code,
    auxiliary_code,
    group_id,
    consumption_id,
  } = getConsumptionProductsSchema.parse(request.query);

  const consumptionProducts = await getconsumptionProductsService({
    id,
    employee_id,
    branch_id,
    product_code,
    auxiliary_code,
    group_id,
    consumption_id,
  });

  return reply.status(200).send(consumptionProducts);
}

export async function createconsumptionProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const employee_id = request.user?.id;

  const { auxiliary_code, branch_id, group_id, product_code, quantity } =
    createConsumptionProductsSchema.parse(request.body);

  const createdconsumptionProduct = await createconsumptionProductsService(
    {
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
      group_id,
    },
    employee_id!
  );

  return reply.status(201).send(createdconsumptionProduct);
}

export async function updateconsumptionProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id, product_code, auxiliary_code, branch_id, quantity, group_id } =
    updateConsumptionProductsSchema.parse(request.body);

  const consumptionProductUpdated = await updateconsumptionProductsService({
    id,
    product_code,
    auxiliary_code,
    branch_id,
    quantity,
    group_id,
  });

  return reply
    .status(200)
    .send({ message: "Produtos de consumo atualizados com sucesso!" });
}

export async function deleteconsumptionProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = consumptionProductsId.parse(request.params);

  const consumptionProductDeleted = await deleteconsumptionProductsService(id);

  return reply.status(200).send(consumptionProductDeleted);
}
