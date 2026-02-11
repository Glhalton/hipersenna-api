import { FastifyReply, FastifyRequest } from "fastify";
import {
  createGoalRecordsSchema,
  getGoalRecordsSchema,
  goalRecordIdSchema,
  updateGoalRecordsSchema,
} from "../schemas/goalRecords.schemas.js";
import {
  createGoalRecordsService,
  deleteGoalRecordsService,
  getGoalRecordsService,
  updateGoalRecordsService,
} from "../services/goalRecords.services.js";

export async function getGoalRecordsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { department, branch_id, type, goal_month } =
    getGoalRecordsSchema.parse(request.query);

  const goalRecords = await getGoalRecordsService({
    department,
    branch_id,
    type,
    goal_month,
  });

  return reply.status(200).send(goalRecords);
}

export async function createGoalRecordsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { branch_id, department, goal_value, type, goal_month } =
    createGoalRecordsSchema.parse(request.body);

  const goalRecord = await createGoalRecordsService({
    branch_id,
    department,
    type,
    goal_value,
    goal_month,
  });

  return reply.status(201).send(goalRecord);
}

export async function updateGoalRecordsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { department, branch_id, type, goal_month, goal_value } =
    updateGoalRecordsSchema.parse(request.body);

  const { id } = goalRecordIdSchema.parse(request.params);

  const data = await updateGoalRecordsService(
    { department, branch_id, type, goal_month, goal_value },
    id,
  );

  return reply.status(200).send(data);
}

export async function deleteGoalRecordsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = goalRecordIdSchema.parse(request.params);

  const data = await deleteGoalRecordsService(id);

  return reply.status(200).send(data);
}
