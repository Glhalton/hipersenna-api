import { FastifyInstance } from "fastify";
import { listBonus } from "./service";
import { BonusQuery } from "./schema";

export default function bonusRoutes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    const query = request.query as BonusQuery;
    const result = await listBonus({query});
    return reply.status(result.status).send(result.body);
  })
}