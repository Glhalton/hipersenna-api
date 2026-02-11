import { FastifyReply, FastifyRequest } from "fastify";
import {
  getDamageReportSchema,
  getSalesReportSchema,
} from "../schemas/reports.schemas.js";
import {
  getDamageReportService,
  getSalesReportService,
} from "../services/reports.services.js";

export async function getDamageReportController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { branchId, departmentId, monthYear } = getDamageReportSchema.parse(
    request.query,
  );

  const data = await getDamageReportService({
    branchId,
    departmentId,
    monthYear,
  });

  return reply.status(200).send(data);
}

export async function getSalesReportController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { branchId, departmentId, monthYear } = getSalesReportSchema.parse(
    request.query,
  );

  const data = await getSalesReportService({
    branchId,
    departmentId,
    monthYear,
  });

  return reply.status(200).send(data);
}
