import { prisma } from "../lib/prisma.js";
import { CreateNotification } from "../schemas/notifications.schemas.js";

export const getNotificationService = async (employee_id: number) => {
  return await prisma.hsnotifications.findMany({
    where: {
      employee_id,
    },
  });
};

export const createNotificationService = async (
  { body, title, type, reference_id }: CreateNotification,
  employee_id: number,
) => {
  return await prisma.hsnotifications.create({
    data: {
      employee_id,
      body,
      title,
      type,
      reference_id,
    },
  });
};
