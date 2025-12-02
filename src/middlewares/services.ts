import { prisma } from "../lib/prisma.js";

export async function getUserPermissions(userId: number): Promise<number[]> {
  const user = await prisma.hsemployees.findUnique({
    where: { id: userId },
    include: {
      hsusers_permissions: {
        include: { hspermissions: true },
      },
      role: {
        include: {
          hsroles_permissions: {
            include: { hspermissions: true },
          },
        },
      },
    },
  });

  if (!user) return [];

  const directPermissions = user.hsusers_permissions.map(
    (p) => p.hspermissions.id
  );

  const rolePermissions = user.role.hsroles_permissions.map(
    (p) => p.hspermissions.id
  );

  const allPermissions = new Set([...directPermissions, ...rolePermissions]);

  return Array.from(allPermissions);
}
