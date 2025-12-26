import { describe, it, expect, beforeEach, vi } from "vitest";
import jwt from "jsonwebtoken";
import { signinController } from "../controllers/signin.controllers.js";
import * as services from "../services/signin.services.js";
import { ZodError } from "zod";

vi.mock("../services/signin.services.js", () => ({
  signInService: vi.fn(),
  deleteSessionsService: vi.fn(),
  createSessionService: vi.fn(),
}));

describe("signinController", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.JWT_SECRET = "test-secret";
  });

  it("Signin successfully", async () => {
    const fakeUser = {
      id: 1,
      branch_id: 1,
      winthor_id: 1,
      name: "Test user",
      username: "testuser",
      created_at: "2025-12-16T20:05:04.531Z",
      modified_at: "2025-12-16T20:05:04.531Z",
      role: {
        role_id: 1,
        description: "test role",
        permissions: [1],
      },
      userPermissions: [1],
      allPermissions: [1],
    };

    (services.signInService as any).mockResolvedValue({
      token: "fake-jwt-token",
      user: fakeUser,
    });
    (services.deleteSessionsService as any).mockResolvedValue(true);
    (services.createSessionService as any).mockResolvedValue(true);

    const request: any = { body: { username: "testuser", password: "123456" } };
    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await signinController(request, reply);

    expect(reply.status).toHaveBeenCalledWith(201);
    expect(reply.send).toHaveBeenCalledWith(
      expect.objectContaining({
        token: expect.any(String),
        user: fakeUser,
      })
    );
  });
});
