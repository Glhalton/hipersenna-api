import { FastifyInstance } from "fastify";
import signinRoutes from "./routes/signin.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";
import validitiesRoutes from "./routes/validities.routes.js";
import validityRequestsRoutes from "./routes/validityRequests.routes.js";
import bonusRoutes from "./routes/bonus.routes.js";
import permissionsRoutes from "./routes/permissions.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import rolesPermissionsRoutes from "./routes/rolesPermissions.routes.js";
import userPermissionsRoutes from "./routes/userPermissions.routes.js";
import sessionsRoutes from "./routes/sessions.routes.js";
import concurrentsRoutes from "./routes/concurrents.routes.js";
import consumptionProductsRoutes from "./routes/consumptionProducts.routes.js";
import consumptionGroupsRoutes from "./routes/consumptionGroups.routes.js";
import rafflesRoutes from "./routes/raffles.routes.js";
import raffleClientsRoutes from "./routes/raffleClients.routes.js";
import { consumptionNotesRoutes } from "./routes/consumptionNotes.routes.js";

export default async function (app: FastifyInstance) {
  app.register(signinRoutes, {
    prefix: "/signin",
  });
  app.register(bonusRoutes, {
    prefix: "/bonus",
  });
  app.register(concurrentsRoutes, {
    prefix: "/concurrents",
  });
  app.register(consumptionProductsRoutes, {
    prefix: "/consumption-products",
  });
  app.register(consumptionGroupsRoutes, {
    prefix: "/consumption-groups",
  });
  app.register(consumptionNotesRoutes, {
    prefix: "/consumption-notes",
  });
  app.register(permissionsRoutes, {
    prefix: "/permissions",
  });
  app.register(productsRoutes, {
    prefix: "/products",
  });
  app.register(rafflesRoutes, {
    prefix: "/raffles",
  });
  app.register(raffleClientsRoutes, {
    prefix: "/raffle-clients",
  });
  app.register(rolesRoutes, {
    prefix: "/roles",
  });
  app.register(rolesPermissionsRoutes, {
    prefix: "/role-permissions",
  });
  app.register(sessionsRoutes, {
    prefix: "/sessions",
  });
  app.register(userPermissionsRoutes, {
    prefix: "/user-permissions",
  });
  app.register(usersRoutes, {
    prefix: "/users",
  });
  app.register(validitiesRoutes, {
    prefix: "/validities",
  });
  app.register(validityRequestsRoutes, {
    prefix: "/validity-requests",
  });
}
