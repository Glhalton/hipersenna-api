import { FastifyInstance} from "fastify";
import { createUserRolesController, deleteUserRolesController, getUserRolesController } from '../controllers/userRoles.controllers.js';
import { authorizePermissions } from '../middlewares/authorizePermissions.js';
import { userIdSchema } from "../schemas/users.schemas.js";
import { userRoleSchema, userRolesResponseSchema } from "../schemas/userRoles.schemas.js";
import z from "zod";

export default async function userRolesRoutes(app: FastifyInstance){
    app.get("/:id",  {schema:{
        description: "Realiza a consulta de cargos de um determinado usuário.",
        security: [{ BearerAuth: [] }],
        params: userIdSchema,
        response: {
            // 200: z.array(userRolesResponseSchema),
            // 404: z.object({message: z.string()})
        },
        tags: ["User-Roles"],
        summary: "Rota de consulta de cargos de usuários.",
    }},getUserRolesController);

    app.post("/", {preHandler: authorizePermissions(13), schema:{
        description: "Realiza a liberação de cargos à um determinado usuário.",
        security: [{ BearerAuth: [] }],
        body: userRoleSchema,
        response:{
            201: userRolesResponseSchema
        },
        tags: ["User-Roles"],
        summary: "Rota de liberação de cargos à usuários."
    }},createUserRolesController);

    app.delete("/", {preHandler: authorizePermissions(25), schema:{
        description: "Realiza a exclusão de cargos de um determinado usuário.",
        security: [{ BearerAuth: [] }],
        body: userRoleSchema,
        response: {
            201: userRolesResponseSchema
        },
        tags:["User-Roles"],
        summary: "Rota de exclusão de cargos de usuários."
    }}, deleteUserRolesController);
}