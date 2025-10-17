import { prisma } from "../lib/prisma";

export async function getUserPermissions(userId: number): Promise<number[]> {
  const user = await prisma.hsemployees.findUnique({
    where: { id: userId },
    include: {
      hsusers_permissions: {
        include: { hspermissions: true },
      },
      hsusers_roles: {
        include: {
          hsroles: {
            include: {
              hspermissions_roles: {
                include: { hspermissions: true },
              },
            },
          },
        },
      },
    },
  });

  if (!user) return [];

  const directPermissions = user.hsusers_permissions.map(
    (p) => p.hspermissions.id
  );

  const rolePermissions = user.hsusers_roles.flatMap((r) =>
    r.hsroles.hspermissions_roles.map((p) => p.hspermissions.id)
  );

  const allPermissions = new Set([...directPermissions, ...rolePermissions]);

  console.log(allPermissions);
  return Array.from(allPermissions);
}
