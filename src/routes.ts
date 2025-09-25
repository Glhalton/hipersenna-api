import { FastifyInstance } from "fastify";
import validitiesRoutes from "./modules/validities/routes";
import { validityRequestsRoutes } from "./modules/validityRequests/routes";
import userAuthRoutes from "./modules/users/routes";
import bonusRoutes from "./modules/bonus/routes";

export default async function (app:FastifyInstance){
    app.register(validitiesRoutes, {prefix: '/validities'});
    app.register(validityRequestsRoutes, {prefix: 'validityRequests'});
    app.register(userAuthRoutes, {prefix: '/auth'});
    app.register(bonusRoutes, {prefix: '/bonus'})
}