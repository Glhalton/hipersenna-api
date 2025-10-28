import { FastifyInstance } from "fastify";
import { createValidityController, getAllValiditiesController, getValidityByEmployeeController, getValidityController } from "../controllers/validities.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function validitiesRoutes(app: FastifyInstance){
    app.get("/",{ preHandler: authorizePermissions(20) }, getAllValiditiesController);

    app.get("/id/:id",{preHandler: authorizePermissions(21)}, getValidityController);

    app.get("/employee", getValidityByEmployeeController);

    app.post("/", {preHandler: authorizePermissions(22)}, createValidityController);
}