import { FastifyInstance } from "fastify/types/instance.js";
import {
  createConsumerNotesController,
  deleteConsumerNotesController,
  getConsumerNotesController,
  updateConsumerNotesController,
} from "../controllers/consumerNotes.controllers.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

export async function consumerNotesRoutes(app: FastifyInstance) {
  app.get("/", getConsumerNotesController);

  app.post("/",{preHandler: authenticate}, createConsumerNotesController);

  app.patch("/:id", updateConsumerNotesController);

  app.delete("/:id", deleteConsumerNotesController);
}
