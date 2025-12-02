import { FastifyReply, FastifyRequest } from "fastify";
import {
  consumerProductsSchema,
  getConsumerProductsSchema,
} from "../schemas/consumerProducts.schemas.js";
import { createConsumerProductsService } from "../services/consumerProducts.services.js";

export async function createConsumerProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const employee_id = request.user?.id;

    if (!employee_id) {
      throw new Error("Erro ao buscar dados do usuário.");
    }

    const {
      unit_price,
      auxiliary_code,
      branch_id,
      group_id,
      product_code,
      quantity,
    } = consumerProductsSchema.parse(request.body);

    const createdConsumerProduct = await createConsumerProductsService({
      branch_id,
      product_code,
      auxiliary_code,
      quantity,
      unit_price,
      group_id,
    }, employee_id,);

    return reply.status(201).send(createdConsumerProduct);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
