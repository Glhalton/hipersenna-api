import { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { NotFound } from "./notFound.error.js";
import { Conflict } from "./conflict.error.js";
import { BadRequest } from "./badRequest.error.js";
import { Unauthorized } from "./unauthorized.error.js";

export function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error, request, reply) => {
    if (error.validation) {

      return reply.status(400).send({
        message: "Erro de validação",
        errors: error.validation.map((err) => ({
          field: err.instancePath.replace("/", ""),
          message: err.message,
        })),
      });
    }

    if (error instanceof ZodError) {
      return reply.status(400).send({
        message: error.message,
      });
    }

    if (error instanceof BadRequest) {
      return reply.status(400).send({
        message: error.message,
      });
    }

    if (error instanceof Unauthorized) {
      return reply.status(401).send({
        message: error.message,
      });
    }

    if (error instanceof NotFound) {
      return reply.status(404).send({
        message: error.message,
      });
    }

    if (error instanceof Conflict) {
      return reply.status(409).send({
        message: error.message,
      });
    }

    console.error(error);
    return reply.status(500).send({
      message: "Erro interno do servidor",
    });
  });
}
