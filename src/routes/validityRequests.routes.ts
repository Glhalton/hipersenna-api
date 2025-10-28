import { FastifyInstance } from "fastify";
import {
  createValidityRequestController,
  getAllValidityRequestsController,
  listValidityRequestsByEmployeeIdController,
  updateValidityRequestController,
} from "../controllers/validityRequests.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function validityRequestsRoutes(app: FastifyInstance) {
  app.get(
    "/",
    { preHandler: authorizePermissions(16) },
    getAllValidityRequestsController
  );

  app.get(
    "/employee",
    { preHandler: authorizePermissions(17) },
    listValidityRequestsByEmployeeIdController
  );

  app.post(
    "/",
    { preHandler: authorizePermissions(18) },
    createValidityRequestController
  );

  app.patch(
    "/",
    { preHandler: authorizePermissions(19) },
    updateValidityRequestController
  );
}
