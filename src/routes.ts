import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import signinRoutes from "./routes/signin.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";
import validitiesRoutes from "./routes/validities.routes.js";
import validityRequestsRoutes from "./routes/validityRequests.routes.js";
import bonusRoutes from "./routes/bonus.routes.js";
import permissionsRoutes from "./routes/permissions.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import userRolesRoutes from "./routes/userRoles.routes.js";
import rolesPermissionsRoutes from "./routes/rolesPermissions.routes.js";
import userPermissionsRoutes from "./routes/userPermissions.routes.js";
import { authenticate } from "./middlewares/authentication.js";
import sessionsRoutes from "./routes/sessions.routes.js";
import concurrentsRoutes from "./routes/concurrents.routes.js";

export default async function (app: FastifyInstance) {
  app.register(signinRoutes, { prefix: "/signin" });

  app.register(async (protectedRoutes) => {
    protectedRoutes.addHook("preHandler", authenticate);
    protectedRoutes.register(bonusRoutes, { prefix: "/bonus" });
    protectedRoutes.register(concurrentsRoutes, {prefix: "/concurrents"})
    
    protectedRoutes.register(permissionsRoutes, { prefix: "/permissions" });
    protectedRoutes.register(productsRoutes, { prefix: "/products" });
    protectedRoutes.register(rolesRoutes, { prefix: "/roles" });
    protectedRoutes.register(rolesPermissionsRoutes, {
      prefix: "/role-permissions",
    });
    protectedRoutes.register(sessionsRoutes, { prefix: "/sessions" });
    protectedRoutes.register(userPermissionsRoutes, {
      prefix: "/user-permissions",
    });
    protectedRoutes.register(usersRoutes, { prefix: "/users" });
    protectedRoutes.register(userRolesRoutes, { prefix: "/user-roles" });
    protectedRoutes.register(validitiesRoutes, { prefix: "/validities" });
    protectedRoutes.register(validityRequestsRoutes, {
      prefix: "/validity-requests",
    });
  });
}
