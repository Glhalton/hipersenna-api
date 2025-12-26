import { beforeEach, describe, expect, it, MockedFunction, vi } from "vitest";
import * as services from "../services/bonus.services.js";
import { bonusListController } from "../controllers/bonus.controllers.js";
import { getBonusSchema } from "../schemas/bonus.schemas.js";
import { ZodError } from "zod";

vi.mock("../services/bonus.services.js", () => ({
  getBonusService: vi.fn(),
}));

describe("bonusController", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Bonus returned successfully.", async () => {
    const fakeResult = [
      {
        filial: "01",
        depart: 10,
        codProd: 123,
        descricao: "Produto Teste",
        qtEntrada: 100,
        dtBonus: "2024-01-01",
        dtValidade: "2024-12-31",
        mediaF1: 10,
        mediaF2: 12,
        mediaF3: 11,
        mediaF4: 9,
        mediaF5: 8,
        mediaF7: 7,
      },
    ];

    const mockGetBonusService = services.getBonusService as MockedFunction<
      typeof services.getBonusService
    >;

    mockGetBonusService.mockResolvedValue(fakeResult);

    const request: any = {
      query: {
        codprod: "123",
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await bonusListController(request, reply);

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  it("Returns 404 when no bonus is found", async () => {
    const mockGetBonusService = services.getBonusService as MockedFunction<
      typeof services.getBonusService
    >;

    mockGetBonusService.mockResolvedValue([]);

    const request: any = {
      query: {},
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await bonusListController(request, reply);

    expect(reply.status).toHaveBeenCalledWith(404);
    expect(reply.send).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Bônus não encontrado!" })
    );
  });

  it("Returns 400 if zod throw a validation error", async () => {
    const invalidQuery = { codProd: 12345 };

    const request: any = { query: invalidQuery };
    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    const originalParse = getBonusSchema.parse;
    getBonusSchema.parse = () => {
      throw new ZodError([]);
    };

    await bonusListController(request, reply);

    expect(reply.status).toHaveBeenCalledWith(400);
    expect(reply.send).toHaveBeenCalledWith(
      expect.objectContaining({ message: expect.any(String) })
    );

    getBonusSchema.parse = originalParse;
  });
});
