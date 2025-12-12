import { FastifyRequest, FastifyReply } from "fastify";
import {
  consumerNotesId,
  createConsumerNotesSchema,
  getConsumerNotesSchema,
} from "../schemas/consumerNotes.schemas.js";
import {
  createConsumerNotesService,
  deleteConsumerNotesService,
  getConsumerNotesService,
} from "../services/consumerNotes.services.js";

export async function getConsumerNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, employee_id } = getConsumerNotesSchema.parse(request.query);

    const consumerNotes = await getConsumerNotesService({ id, employee_id });

    if (consumerNotes.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nota de consumo não encontrada!" });
    }

    return reply.status(200).send(consumerNotes);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createConsumerNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const employee_id = request.user?.id;

    if (!employee_id) {
      throw new Error("Erro ao coletar dados do usuário.");
    }

    const { id } = createConsumerNotesSchema.parse(request.body);

    const consumerNotesCreated = await createConsumerNotesService(
      {
        id,
      },
      employee_id
    );

    return reply.status(201).send(consumerNotesCreated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateConsumerNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteConsumerNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumerNotesId.parse(request.params);

    const consumerNote = await getConsumerNotesService({ id });

    if (consumerNote.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nota de consumo não encontrada!" });
    }

    const consumerNoteDeleted = await deleteConsumerNotesService(id);

    return reply.status(200).send(consumerNoteDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
