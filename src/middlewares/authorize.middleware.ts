import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma.js";

export function authorize(...rolesPermitidos: number[]) {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const userId = request.user?.id;
      if (!userId) {
        return reply.status(401).send({ message: "Usuário não autenticado" });
      }

      const permissions = await getUserPermissions(userId);

      const hasPermission = rolesPermitidos.some((p) =>
        permissions.includes(p)
      );

      if (!hasPermission) {
        return reply.status(403).send({ message: "Usuário não autorizado" });
      }
    } catch (error: any) {
      return reply
        .status(500)
        .send({ message: "Erro ao verificar permissões do usuário:" });
    }
  };
}

async function getUserPermissions(userId: number): Promise<number[]> {
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
