import { FastifyRequest, FastifyReply } from "fastify";
import {
  consumptionNotesIdSchema,
  createConsumptionNotesSchema,
  getConsumptionNotesSchema,
  updateConsumptionNotesSchema,
} from "../schemas/consumptionNotes.schemas.js";
import {
  createConsumptionNotesService,
  deleteConsumptionNotesService,
  getConsumptionNotesService,
  updateConsumptionNotesService,
} from "../services/consumptionNotes.services.js";

export async function getConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, employee_id } = getConsumptionNotesSchema.parse(request.query);

    const consumptionNotes = await getConsumptionNotesService({
      id,
      employee_id,
    });

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

export async function createConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const employee_id = request.user?.id;

    if (!employee_id) {
      throw new Error("Erro ao coletar dados do usuário.");
    }

    const { id } = createConsumptionNotesSchema.parse(request.body);

    const consumptionNotesCreated = await createConsumptionNotesService(
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

export async function updateConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumptionNotesIdSchema.parse(request.params);

    const consumptionNote = await getConsumptionNotesService({ id });

    if (consumptionNote.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nota de consumo não encontrada" });
    }

    const { nfe_number } = updateConsumptionNotesSchema.parse(request.body);

    const updatedConsumptionNote = await updateConsumptionNotesService(
      { nfe_number },
      id
    );

    return reply.status(200).send(updatedConsumptionNote);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}

export async function deleteConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id } = consumptionNotesIdSchema.parse(request.params);

    const consumptionNote = await getConsumptionNotesService({ id });

    if (consumptionNote.length === 0) {
      return reply
        .status(404)
        .send({ message: "Nota de consumo não encontrada!" });
    }

    const consumptionNoteDeleted = await deleteConsumptionNotesService(id);

    return reply.status(200).send(consumptionNoteDeleted);
  } catch (error: any) {
    return reply.status(400).send({ message: error.message });
  }
}
