import { FastifyInstance } from "fastify";
import { userAccessControlParamSchema, userRoleSchema } from "./schema";
import { createUserRoles, getUserRolesById } from "./service";

export default async function userAccessControlRoutes(app: FastifyInstance) {
  app.get("/user-roles/id/:id", async (request, reply) => {
    try {

        const {id} = userAccessControlParamSchema.parse(request.params);
        const userRoles = await getUserRolesById(id);

        return reply.status(200).send(userRoles);

    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  });

  app.post("/user-roles", async (request,reply) => {
    try{
        const parsedData = userRoleSchema.parse(request.body);
        const userRole = await createUserRoles(parsedData)
        return reply.status(201).send(userRole);
    } catch (error: any) {
        return reply.status(400).send({message: error.message});
    }
  })
}
