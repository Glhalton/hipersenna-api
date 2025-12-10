import bcrypt from "bcryptjs";
import { signinController } from "../controllers/signin.controllers.js";
import { prisma } from "../lib/prisma.js";
import {
  createSessionService,
  deleteSessionService,
  signInService,
} from "../services/signin.services.js";

describe("SignIn Controller", () => {
  beforeAll(() => {
    process.env.JWT_SECRET = "test-secret";
  });

  test("Successfully SignIn", async () => {
    const fakeUser = {
      id: 1,
      username: "testuser",
      name: "Test User",
      branch_id: 1,
      winthor_id: 10,
    };

    (signInService as jest.Mock).mockResolvedValue(fakeUser);
    (deleteSessionService as jest.Mock).mockResolvedValue(true);
    (createSessionService as jest.Mock).mockResolvedValue(true);

    const request: any = {
      body: {
        username: "testuser",
        password: "password123",
      },
    };

    const reply: any = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await signinController(request, reply);

    expect(reply.status).toHaveBeenCalledWith(200);

    expect(reply.send).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Usuário logado com sucesso!",
        token: expect.any(String),
        user: fakeUser,
      })
    );
  });
});

//Testes10
