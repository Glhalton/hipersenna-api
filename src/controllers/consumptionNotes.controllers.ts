import { FastifyRequest, FastifyReply } from "fastify";
import {
  consumptionNotesId,
  createconsumptionNotesSchema,
  getconsumptionNotesSchema,
} from "../schemas/consumptionNotes.schemas.js";
import {
  createconsumptionNotesService,
  deleteconsumptionNotesService,
  getconsumptionNotesService,
} from "../services/consumptionNotes.services.js";

export async function getconsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, employee_id } = getconsumptionNotesSchema.parse(request.query);

    const consumptionNotes = await getconsumptionNotesService({ id, employee_id });

    if (consumptionNotes.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nota de consumo não encontrada!" });
    }

    return reply.status(200).send(consumptionNotes);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function createconsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const employee_id = request.user?.id;

    if (!employee_id) {
      throw new Error("Erro ao coletar dados do usuário.");
    }

    const { id } = createconsumptionNotesSchema.parse(request.body);

    const consumptionNotesCreated = await createconsumptionNotesService(
      {
        id,
      },
      employee_id
    );

    return reply.status(201).send(consumptionNotesCreated);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function updateconsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteconsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumptionNotesId.parse(request.params);

    const consumptionNote = await getconsumptionNotesService({ id });

    if (consumptionNote.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nota de consumo não encontrada!" });
    }

    const consumptionNoteDeleted = await deleteconsumptionNotesService(id);

    return reply.status(200).send(consumptionNoteDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
