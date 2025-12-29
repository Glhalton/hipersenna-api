import { test, beforeEach, vi, describe, expect } from "vitest";
import * as services from "../services/branches.services.js";
import {
  createBranchesController,
  deleteBranchesController,
  getBranchesController,
  updateBranchesController,
} from "../controllers/branches.controllers.js";
import { NotFound } from "../errors/notFound.error.js";
import { deleteRaffleClientsController } from "../controllers/raffleClients.controllers.js";

vi.mock("../services/branches.services.js", () => ({
  getBranchesService: vi.fn(),
  createBranchesService: vi.fn(),
  updateBranchesService: vi.fn(),
  deleteBranchesService: vi.fn(),
}));

describe("branchesController", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Branch successfully returned", async () => {
    const fakeResult = [
      {
        id: 1,
        description: "testBranch",
        created_at: new Date("2024-01-01"),
        modified_at: new Date("2024-01-01"),
      },
    ];

    (services.getBranchesService as any).mockResolvedValue(fakeResult);

    const request: any = {
      query: {
        id: 1,
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await getBranchesController(request, reply);

    expect(services.getBranchesService).toHaveBeenCalledWith({ id: 1 });
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  test("Branch successfully created", async () => {
    const fakeResult = {
      id: 1,
      description: "testBranch",
      created_at: new Date("2024-01-01"),
      modified_at: new Date("2024-01-01"),
    };

    (services.createBranchesService as any).mockResolvedValue(fakeResult);

    const request: any = {
      body: {
        description: "testBranch",
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await createBranchesController(request, reply);

    expect(services.createBranchesService).toHaveBeenCalledWith({
      description: "testBranch",
    });
    expect(reply.status).toHaveBeenCalledWith(201);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  test("Branch successfully updated", async () => {
    const fakeResult = {
      id: 1,
      description: "testBranch",
      created_at: new Date("2024-01-01"),
      modified_at: new Date("2024-01-01"),
    };

    (services.updateBranchesService as any).mockResolvedValue(fakeResult);

    const request: any = {
      params: { id: 1 },
      body: {
        description: "testBranchUpdated",
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await updateBranchesController(request, reply);

    expect(services.updateBranchesService).toHaveBeenCalledWith(
      {
        description: "testBranchUpdated",
      },
      1
    );
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

    test("Branch not found for update/error 404", async () => {
    (services.updateBranchesService as any).mockRejectedValue(
      new NotFound("Filial não encontrada!")
    );

    const request: any = {
      params: { id: 99 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await expect(services.updateBranchesService(request, reply)).rejects.toThrowError(
      NotFound
    );
  });

  test("Branch successfully deleted", async () => {
    const fakeResult = {
      id: 1,
      description: "testBranch",
      created_at: new Date("2024-01-01"),
      modified_at: new Date("2024-01-01"),
    };

    (services.deleteBranchesService as any).mockResolvedValue(fakeResult);

    const request: any = {
      params: { id: 1 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await deleteBranchesController(request, reply);

    expect(services.deleteBranchesService).toHaveBeenCalledWith({ id: 1 });
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  test("Branch not found for delete/error 404", async () => {
    (services.deleteBranchesService as any).mockRejectedValue(
      new NotFound("Filial não encontrada!")
    );

    const request: any = {
      params: { id: 99 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await expect(deleteBranchesController(request, reply)).rejects.toThrowError(
      NotFound
    );
  });
});
