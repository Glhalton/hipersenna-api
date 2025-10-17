import { FastifyInstance } from "fastify";
import {
  createRole,
  deleteRole,
  getRoleById,
  getRoles,
  updateRole,
} from "./service";
import { roleParamSchema, roleSchema, roleUpdateSchema } from "./schema";


export default async function rolesRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    try {
      const roles = await getRoles();

      if (roles.length === 0) {
        throw new Error("Nenhum cargo encontrado");
      }

      return reply.status(201).send(roles);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.get("/id/:id", async (request, reply) => {
    try {
      const { id } = roleParamSchema.parse(request.params);
      const role = await getRoleById(id);

      if (!role) {
        throw new Error("Cargo não encontrado");
      }

      return reply.status(201).send(role);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.post("/", async (request, reply,) => {
    try {
      const { name, description } = roleSchema.parse(request.body);

      const role = await createRole(name, description);

      return reply.status(201).send(role);
    } catch (error: any) {
      return reply.status(400).send({ messge: error.message });
    }
  });

  app.delete("/id/:id", async (request, reply) => {
    try {
      const { id } = roleParamSchema.parse(request.params);

      const roleExists = await getRoleById(id);
      if (!roleExists) {
        throw new Error("Cargo não encontrado");
      }
      const role = await deleteRole(id);

      return reply.status(200).send(role);
    } catch (error: any) {
      return reply.status(400).send(error.message);
    }
  });

  app.patch("/id/:id", async (request, reply) => {
    try {
      const { id } = roleParamSchema.parse(request.params);

      const data = roleUpdateSchema.parse(request.body);

      const roleExists = await getRoleById(id);
      if (!roleExists) {
        throw new Error("Cargo não encontrado");
      }

      const role = await updateRole(id, data);

      return reply.status(200).send(role);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });
}
