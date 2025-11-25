import { signinController } from "../controllers/signin.controllers.js";
import {
  signInService,
  createSessionService,
  deleteSessionService,
} from "../services/signin.services.js";
import jwt from "jsonwebtoken";
import { signInSchema } from "../schemas/signin.schemas.js";
import { ZodError } from "zod";

jest.mock("../services/signin.services.js");
jest.mock("jsonwebtoken");

describe("signin.ts", () => {
  let reply: any;
  let request: any;

  beforeEach(() => {
    reply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    request = {
      body: {},
    };

    jest.clearAllMocks();
  });

  it("Deve logar o usuário com sucesso", async () => {
    const mockUser = {
      id: 1,
    }; // simula o usuário que o banco retornaria
    request.body = { username: "john", password: "password" };

    (signInService as jest.Mock).mockResolvedValue(mockUser);
    (deleteSessionService as jest.Mock).mockResolvedValue({});
    (createSessionService as jest.Mock).mockResolvedValue({});
    (jwt.sign as jest.Mock).mockReturnValue("mockToken");
    (jwt.decode as jest.Mock).mockReturnValue({
      exp: Math.floor(Date.now() / 1000) + 3600,
    });

    process.env.JWT_SECRET = "secret";

    await signinController(request, reply);

    expect(signInService).toHaveBeenCalledWith({
      username: "john",
      password: "password",
    });
    expect(deleteSessionService).toHaveBeenCalledWith(mockUser.id);
    expect(createSessionService).toHaveBeenCalled();
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith({
      message: "Usuário logado com sucesso!",
      token: "mockToken",
    });
  });
});
