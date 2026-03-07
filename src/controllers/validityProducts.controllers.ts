import { FastifyReply, FastifyRequest } from "fastify";
import { getValidityProductsSchema } from "../schemas/validityProducts.schemas.js";
import { getValidityProductsService } from "../services/validityProducts.services.js";

export async function getValidityProductsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const permittedBranches = request.user?.permittedBranches;
  const {
    branchId,
    expiresDays,
    finalCreationDate,
    finalValidityDate,
    id,
    initialCreationDate,
    initialValidityDate,
    productCode,
    auxiliaryCode,
    createdByEmployee,
    department,
    cursor,
    limit,
  } = getValidityProductsSchema.parse(request.query);

  const data = await getValidityProductsService(
    {
      branchId,
      expiresDays,
      finalCreationDate,
      finalValidityDate,
      id,
      initialCreationDate,
      initialValidityDate,
      productCode,
      auxiliaryCode,
      createdByEmployee,
      department,
      cursor,
      limit,
    },
    permittedBranches!,
  );

  return reply.status(200).send(data);
}
