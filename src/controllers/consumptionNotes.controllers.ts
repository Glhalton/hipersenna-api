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
  getConsumptionNotesDetailedService,
  getConsumptionNotesService,
  updateConsumptionNotesService,
} from "../services/consumptionNotes.services.js";

export async function getConsumptionNotesDetailedController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = consumptionNotesIdSchema.parse(request.params);

  const consumptionNotes = await getConsumptionNotesDetailedService(id);

  return reply.status(200).send(consumptionNotes);
}

export async function getConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id, employee_id } = getConsumptionNotesSchema.parse(request.query);

  const consumptionNotes = await getConsumptionNotesService({
    id,
    employee_id,
  });

  return reply.status(200).send(consumptionNotes);
}

export async function createConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const employee_id = request.user?.id;

  const noteData = createConsumptionNotesSchema.parse(request.body);
  const consumptionNotesCreated = await createConsumptionNotesService(
    noteData,
    employee_id!,
  );

  return reply.status(201).send(consumptionNotesCreated);
}

export async function updateConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = consumptionNotesIdSchema.parse(request.params);

  const { nfe_number } = updateConsumptionNotesSchema.parse(request.body);

  const updatedConsumptionNote = await updateConsumptionNotesService(
    { nfe_number },
    id,
  );

  return reply.status(200).send(updatedConsumptionNote);
}

export async function deleteConsumptionNotesController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = consumptionNotesIdSchema.parse(request.params);

  const consumptionNoteDeleted = await deleteConsumptionNotesService(id);

  return reply.status(200).send(consumptionNoteDeleted);
}
