import { FastifyInstance } from "fastify";
import validitiesRoutes from "./modules/validities/routes";
import { validityRequestsRoutes } from "./modules/validityRequests/routes";
import userSignUpRoutes from "./modules/users/routes";

export default async function (app:FastifyInstance){
    app.register(validitiesRoutes, {prefix: '/validities'});
    app.register(validityRequestsRoutes, {prefix: 'validityRequests'});
    app.register(userSignUpRoutes, {prefix: '/signup'});
}