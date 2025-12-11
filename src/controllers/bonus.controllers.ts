import { FastifyRequest, FastifyReply } from "fastify";
import { getBonusSchema } from "../schemas/bonus.schemas.js";
import { bonusListService } from "../services/bonus.services.js";

export async function bonusListController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {

    const {codprod, dpart, dtbonusend, dtbonusstart, dtvalidend, dtvalidstart, filial} = getBonusSchema.parse(request.query);
    const result = await bonusListService({codprod, dpart, dtbonusend, dtbonusstart, dtvalidend, dtvalidstart, filial});
    
    if (!result || result.length === 0 ){
      return reply.status(404).send({message: "Bônus não encontrado!"})
    }

    return reply.status(200).send(result);

  } catch (error: any) {
    console.log(error)
    return reply.status(400).send({ message: error.message });
  }
}