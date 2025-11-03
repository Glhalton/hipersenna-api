import { FastifyInstance } from "fastify";
import { createUserController, deleteUserController, getAllUsersController, getTokenDataController, getUserController, signoutController, updateUserController } from "../controllers/users.controllers";
import { authorizePermissions } from "../middlewares/authorizePermissions";

export default async function usersRoutes (app: FastifyInstance){

    app.get("/", {preHandler: authorizePermissions(1)}, getUserController);

    app.post("/", {preHandler: authorizePermissions(2)}, createUserController);

    app.delete("/id/:id", {preHandler: authorizePermissions(3)},deleteUserController);

    app.patch("/id/:id",{preHandler: authorizePermissions(4)}, updateUserController);

    app.delete("/", signoutController);

    app.get("/me", getTokenDataController);
}