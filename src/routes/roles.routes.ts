import {FastifyInstance} from "fastify";
import { createRoleController, deleteRoleController, getRoleController, updateRoleController } from '../controllers/roles.controllers.js';
import { authorizePermissions } from '../middlewares/authorizePermissions.js';
import { getRoleSchema, roleResponseSchema } from "../schemas/roles.schemas.js";
import z from "zod";

export default async function rolesRoutes(app: FastifyInstance){

    app.get("/", {preHandler: authorizePermissions(9), schema:{
        description: "Realiza a consulta de cargos.",
        querystring: getRoleSchema,
        response: {
            200: roleResponseSchema,
            404: z.object({message: z.string()})
        },
        tags: ["Roles"],
        summary: "Rota de consulta de cargos."
    }},getRoleController);

    app.post("/", {preHandler: authorizePermissions(10)},createRoleController);

    app.delete("/id/:id", {preHandler: authorizePermissions(11)},deleteRoleController);

    app.patch("/id/:id", {preHandler: authorizePermissions(12)}, updateRoleController);
}