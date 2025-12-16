import { FastifyInstance } from "fastify/types/instance.js";
import {
  createconsumptionNotesController,
  deleteconsumptionNotesController,
  getconsumptionNotesController,
  updateconsumptionNotesController,
} from "../controllers/consumptionNotes.controllers.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export async function consumptionNotesRoutes(app: FastifyInstance) {
  app.get("/", getconsumptionNotesController);

  app.post("/",{preHandler: authenticate}, createconsumptionNotesController);

  app.patch("/:id", updateconsumptionNotesController);

  app.delete("/:id", deleteconsumptionNotesController);
}
