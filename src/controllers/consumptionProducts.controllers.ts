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
  try {

    const {
      id,
      employee_id,
      branch_id,
      product_code,
      auxiliary_code,
      group_id,
      consumption_id
    } = getConsumptionProductsSchema.parse(request.query);

    const consumptionProducts = await getconsumptionProductsService({
      id,
      employee_id,
      branch_id,
      product_code,
      auxiliary_code,
      group_id,
      consumption_id
    });

    if (consumptionProducts.length === 0) {
      return reply.status(404).send({
        message: "Produtos de consumo não encontrados!",
      });
    }

    return reply.status(200).send(consumptionProducts);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createconsumptionProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const employee_id = request.user?.id;

    if (!employee_id) {
      throw new Error("Erro ao buscar dados do usuário.");
    }

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
      employee_id
    );

    return reply.status(201).send(createdconsumptionProduct);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateconsumptionProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, product_code, auxiliary_code, branch_id, quantity, group_id } =
      updateConsumptionProductsSchema.parse(request.body);

    const consumptionProduct = await existingconsumptionProducts(id);

    if (!consumptionProduct) {
      return reply.status(404).send({
        message: "Produtos de consumo não encontrados!",
      });
    }

    const consumptionProductUpdated = await updateconsumptionProductsService({
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

export async function deleteconsumptionProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumptionProductsId.parse(request.params);

    const consumptionProduct = await getconsumptionProductsService({id});

    if (consumptionProduct.length === 0) {
      return reply.status(404).send({
        message: "Produtos de consumo não encontrados!",
      });
    }

    const consumptionProductDeleted = await deleteconsumptionProductsService(id);

    return reply.status(200).send(consumptionProductDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
