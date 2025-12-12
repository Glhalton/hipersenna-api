import { FastifyReply, FastifyRequest } from "fastify";
import {
  consumerProductsId,
  createConsumerProductsSchema,
  getConsumerProductsSchema,
  updateConsumerProductsSchema,
} from "../schemas/consumerProducts.schemas.js";
import {
  createConsumerProductsService,
  deleteConsumerProductsService,
  existingConsumerProducts,
  getConsumerProductsService,
  updateConsumerProductsService,
} from "../services/consumerProducts.services.js";

export async function getConsumerProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    
    console.log(request.query);

    const {
      id,
      employee_id,
      branch_id,
      product_code,
      auxiliary_code,
      group_id,
      consumption_id
    } = getConsumerProductsSchema.parse(request.query);

    const consumerProducts = await getConsumerProductsService({
      id,
      employee_id,
      branch_id,
      product_code,
      auxiliary_code,
      group_id,
      consumption_id
    });

    if (consumerProducts.length === 0) {
      return reply.status(404).send({
        message: "Produtos de consumo não encontrados!",
      });
    }

    return reply.status(200).send(consumerProducts);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createConsumerProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const employee_id = request.user?.id;

    if (!employee_id) {
      throw new Error("Erro ao buscar dados do usuário.");
    }

    const { auxiliary_code, branch_id, group_id, product_code, quantity } =
      createConsumerProductsSchema.parse(request.body);

    const createdConsumerProduct = await createConsumerProductsService(
      {
        branch_id,
        product_code,
        auxiliary_code,
        quantity,
        group_id,
      },
      employee_id
    );

    return reply.status(201).send(createdConsumerProduct);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateConsumerProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, product_code, auxiliary_code, branch_id, quantity, group_id } =
      updateConsumerProductsSchema.parse(request.body);

    const consumerProduct = await existingConsumerProducts(id);

    if (!consumerProduct) {
      return reply.status(404).send({
        message: "Produtos de consumo não encontrados!",
      });
    }

    const consumerProductUpdated = await updateConsumerProductsService({
      id,
      product_code,
      auxiliary_code,
      branch_id,
      quantity,
      group_id,
    });

    return reply.status(200).send({message: "Produtos de consumo atualizados com sucesso!"});
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteConsumerProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumerProductsId.parse(request.params);

    const consumerProduct = await getConsumerProductsService({id});

    if (consumerProduct.length === 0) {
      return reply.status(404).send({
        message: "Produtos de consumo não encontrados!",
      });
    }

    const consumerProductDeleted = await deleteConsumerProductsService(id);

    return reply.status(200).send(consumerProductDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
