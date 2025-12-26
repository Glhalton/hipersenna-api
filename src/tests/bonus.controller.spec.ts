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
        branchId: "01",
        department: 10,
        productCode: 123,
        description: "Produto Teste",
        inputQuantity: 100,
        bonusDate: "2024-01-01",
        validityDate: "2024-12-31",
        average1: 10,
        average2: 12,
        average3: 11,
        average4: 9,
        average5: 8,
        average7: 7,
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
});
