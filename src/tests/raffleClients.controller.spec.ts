import { it, beforeEach, vi, describe, expect } from "vitest";
import * as services from "../services/raffleClients.services.js";
import {
  createRaffleClientsController,
  deleteRaffleClientsController,
  getRaffleClientsController,
  updateRaffleClientsController,
} from "../controllers/raffleClients.controllers.js";
import { updateRaffleClientSchema } from "../schemas/raffleClients.schemas.js";
import z from "zod";
import { NotFound } from "../errors/notFound.error.js";

vi.mock("../services/raffleClients.services.js", () => ({
  getRaffleClientsService: vi.fn(),
  createRaffleClientsService: vi.fn(),
  updateRaffleClientsService: vi.fn(),
  deleteRaffleClientsService: vi.fn(),
}));

describe("raffleClientsController", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("RaffleClient successfully returned.", async () => {
    const fakeResult = [
      {
        id: 1,
        cpf: "11111111111",
        name: "test user",
        telephone: "11111111111",
        created_at: new Date("2024-01-01"),
        modified_at: new Date("2024-01-01"),
      },
    ];

    (services.getRaffleClientsService as any).mockResolvedValue(fakeResult);

    const request: any = {
      query: {
        id: 1,
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await getRaffleClientsController(request, reply);

    expect(services.getRaffleClientsService).toHaveBeenCalledWith({ id: 1 });

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  it("RaffleClient successfully created.", async () => {
    const fakeResult = {
      id: 1,
      cpf: "11111111111",
      name: "test user",
      telephone: "11111111111",
      created_at: new Date("2024-01-01"),
      modified_at: new Date("2024-01-01"),
    };

    (services.createRaffleClientsService as any).mockResolvedValue(fakeResult);

    const request: any = {
      body: {
        name: "user test",
        cpf: "11111111111",
        telephone: "11111111111",
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await createRaffleClientsController(request, reply);

    expect(services.createRaffleClientsService).toHaveBeenCalledWith({
      name: "user test",
      cpf: "11111111111",
      telephone: "11111111111",
    });

    expect(reply.status).toHaveBeenCalledWith(201);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  it("RaffleClient successfully updated.", async () => {
    const fakeResult = {
      id: 1,
      cpf: "11111111111",
      name: "test user",
      telephone: "11111111111",
      created_at: new Date("2024-01-01"),
      modified_at: new Date("2024-01-01"),
    };

    (services.updateRaffleClientsService as any).mockResolvedValue(fakeResult);

    const request: any = {
      params: { id: 1 },
      body: {
        name: "updated user",
        telephone: "99999999999",
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await updateRaffleClientsController(request, reply);

    expect(services.updateRaffleClientsService).toHaveBeenCalledWith(
      {
        name: "updated user",
        telephone: "99999999999",
      },
      1
    );

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

    it("RaffleClient not found for update/error 404", async () => {
    (services.deleteRaffleClientsService as any).mockRejectedValue(
      new NotFound("Cliente da rifa não encontrado!")
    );

    const request: any = {
      params: { id: 67 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await expect(
      deleteRaffleClientsController(request, reply)
    ).rejects.toThrowError(NotFound);
  });

  it("RaffleClient successfully deleted.", async () => {
    const fakeResult = {
      id: 1,
      cpf: "11111111111",
      name: "test user",
      telephone: "11111111111",
      created_at: new Date("2024-01-01"),
      modified_at: new Date("2024-01-01"),
    };

    (services.deleteRaffleClientsService as any).mockResolvedValue(fakeResult);

    const request: any = {
      params: { id: 1 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await deleteRaffleClientsController(request, reply);

    expect(services.deleteRaffleClientsService).toHaveBeenCalledWith(1);

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  it("RaffleClient not found for delete/error 404", async () => {
    (services.deleteRaffleClientsService as any).mockRejectedValue(
      new NotFound("Cliente da rifa não encontrado!")
    );

    const request: any = {
      params: { id: 67 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await expect(
      deleteRaffleClientsController(request, reply)
    ).rejects.toThrowError(NotFound);
  });
});
