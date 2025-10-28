import { FastifyInstance } from "fastify";
import { signinController } from "../controllers/signin.controllers";

export default async function signinRoutes(app: FastifyInstance) {
  app.post("/", signinController);
}
