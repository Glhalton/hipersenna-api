import { FastifyInstance } from "fastify";
import { createValidityController, getValidityByEmployeeController, getValidityController, updateValidityController } from '../controllers/validities.controllers.js';
import { authorizePermissions } from '../middlewares/authorizePermissions.js';

export default async function validitiesRoutes(app: FastifyInstance){
    app.get("/",{preHandler: authorizePermissions(21)}, getValidityController);

    app.get("/employee", getValidityByEmployeeController);

    app.post("/", {preHandler: authorizePermissions(22)}, createValidityController);

    app.patch("/", updateValidityController);
}