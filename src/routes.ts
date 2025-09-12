import { FastifyInstance } from "fastify";
import validitiesRoutes from "./modules/validities/routes";
import { validityRequestsRoutes } from "./modules/validityRequests/routes";

export default async function (app:FastifyInstance){
    app.register(validitiesRoutes, {prefix: '/validities'});
    app.register(validityRequestsRoutes, {prefix: 'validityRequests'});
}