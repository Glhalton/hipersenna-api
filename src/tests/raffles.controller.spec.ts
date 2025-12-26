import { describe, it, expect, beforeEach, vi } from "vitest";
import * as services from "../services/raffles.services.js";
import { getRafflesController } from "../controllers/raffles.controllers.js";

vi.mock("../services/raffles.services.js", () => ({
  getRafflesService: vi.fn(),
}));

describe("rafflesController", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Raffles returned successfully", async () => {
    const fakeResult = [
      {
        id: 1,
        client_id: 1,
        status: "ATIVO",
        nfc_key: 1234567890123456789,
        raffle_number: "A1B2C3",
        branch_id: 1,
        created_at: new Date("01-01-2026"),
        modified_at: new Date("01-01-2026"),
        hsraffle_clients: {
          id: 1,
          cpf: 11111111111,
          name: "user test",
          telephone: 11111111111,
          created_at: new Date("01-01-2026"),
          modified_at: new Date("01-01-2026"),
        },
      },
    ];

    (services.getRafflesService as any).mockResolvedValue(fakeResult);

    const request: any = {
      query: {
        idd: 2,
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await getRafflesController(request, reply);

    expect(reply.status).toBeCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });
});
