import { FastifyInstance } from "fastify";
import { listBonus } from "./service";
import { BonusQuery } from "./schema";

export default function bonusRoutes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    try {
      const query = request.query as BonusQuery;
      const result = await listBonus({ query });
      return reply.status(result.status).send(result.body);
    } catch (err: any) {
      return reply.status(400).send({ error: err.message })
    }
  })
}