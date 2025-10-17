import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";
import { getUserPermissions } from "./services";

export function authorizePermissions(...rolesPermitidos: number[]) {
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
