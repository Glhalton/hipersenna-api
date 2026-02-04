import { prisma } from "../lib/prisma.js";
import {
  CreatePushTokens,
  DeletePushTokens,
} from "../schemas/pushTokens.schemas.js";

export const getPushTokensService = async () => {
  await prisma.hspush_tokens.findMany();
};

export const createPushTokensService = async (
  { token, deviceId, platform }: CreatePushTokens,
  employee_id: number,
) => {
  return await prisma.hspush_tokens.upsert({
    where: { token },
    update: {
      employee_id,
      device_id: deviceId,
      platform,
      last_used_at: new Date(),
    },
    create: {
      employee_id,
      token,
      device_id: deviceId,
      platform,
    },
  });
};

export const deletePushTokensService = async ({
  deviceId,
  employeeId,
}: DeletePushTokens) => {
  return await prisma.hspush_tokens.deleteMany({
    where: {
      device_id: deviceId,
      employee_id: { not: employeeId },
    },
  });
};
