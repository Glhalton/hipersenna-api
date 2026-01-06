import { test, beforeEach, vi, describe, expect } from "vitest";
import * as services from "../services/dispatchRecords.services.js";
import {
  createDispatchRecordController,
  deleteDispatchRecordController,
  getDispatchRecordController,
  updateDispatchRecordController,
} from "../controllers/dispatchRecords.controllers.js";
import { NotFound } from "../errors/notFound.error.js";

vi.mock("../services/dispatchRecords.services.js", () => ({
  getDispatchRecordService: vi.fn(),
  createDispatchRecordService: vi.fn(),
  updateDispatchRecordService: vi.fn(),
  deleteDispatchRecordService: vi.fn(),
}));

describe("dispatchRecordsControllers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("DispatchRecord successfully returned", async () => {
    const fakeResult = [
      {
        id: 1,
        branch_id: 1,
        nfe_number: "102030",
        seal_number: "123456",
        bonus_number: "456789",
        license_plate: "OTB-2344",
        created_by_employee_id: 1,
        created_at: "2025-12-29T17:41:34.378Z",
        modified_at: "2025-12-29T17:41:34.378Z",
      },
    ];

    (services.getDispatchRecordService as any).mockResolvedValue(fakeResult);

    const request: any = {
      query: {
        id: 1,
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await getDispatchRecordController(request, reply);

    expect(services.getDispatchRecordService).toHaveBeenCalledWith({ id: 1 });
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  test("DispatchRecord successfully created", async () => {
    const fakeResult = {
      id: 1,
      branch_id: 1,
      nfe_number: "102030",
      seal_number: "123456",
      bonus_number: "456789",
      license_plate: "OTB-2344",
      created_by_employee_id: 1,
      created_at: "2025-12-29T17:41:34.378Z",
      modified_at: "2025-12-29T17:41:34.378Z",
    };

    (services.createDispatchRecordService as any).mockResolvedValue(fakeResult);

    const request: any = {
      body: {
        branch_id: 1,
        bonus_number: "456789",
        nfe_number: "102030",
        seal_number: "123456",
        license_plate: "OTB-2344",
      },
      user: {
        id: 1,
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await createDispatchRecordController(request, reply);

    expect(services.createDispatchRecordService).toHaveBeenCalledWith(
      {
        branch_id: 1,
        bonus_number: "456789",
        nfe_number: "102030",
        seal_number: "123456",
        license_plate: "OTB-2344",
      },
      1
    );
    expect(reply.status).toHaveBeenCalledWith(201);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  test("DispatchRecord successfully updated", async () => {
    const fakeResult = {
      id: 1,
      branch_id: 1,
      nfe_number: "102030",
      seal_number: "123456",
      bonus_number: "456789",
      license_plate: "OTB-2344",
      created_by_employee_id: 1,
      created_at: "2025-12-29T17:41:34.378Z",
      modified_at: "2025-12-29T17:41:34.378Z",
    };

    (services.updateDispatchRecordService as any).mockResolvedValue(fakeResult);

    const request: any = {
      params: { id: 1 },
      body: {
        branch_id: 2,
      },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await updateDispatchRecordController(request, reply);

    expect(services.updateDispatchRecordService).toHaveBeenCalledWith(
      {
        branch_id: 2,
      },
      { id: 1 }
    );

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  test("DispatchRecord not found for update/error 404", async () => {
    (services.updateDispatchRecordService as any).mockRejectedValue(
      new NotFound("Registro de despache não encontado!")
    );

    const request: any = {
      params: { id: 99 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await expect(
      services.updateDispatchRecordService(request, reply)
    ).rejects.toThrowError(NotFound);
  });

  test("DispatchRecord successfully deleted", async () => {
    const fakeResult = {
      id: 1,
      branch_id: 1,
      nfe_number: "102030",
      seal_number: "123456",
      bonus_number: "456789",
      license_plate: "OTB-2344",
      created_by_employee_id: 1,
      created_at: "2025-12-29T17:41:34.378Z",
      modified_at: "2025-12-29T17:41:34.378Z",
    };

    (services.deleteDispatchRecordService as any).mockResolvedValue(fakeResult);

    const request: any = {
      params: { id: 1 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await deleteDispatchRecordController(request, reply);

    expect(services.deleteDispatchRecordService).toHaveBeenCalledWith({
      id: 1,
    });
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fakeResult);
  });

  test("DispatchRecord not found for delete/error 404", async () => {
    (services.deleteDispatchRecordService as any).mockRejectedValue(
      new NotFound("Registro de despache não encontado!")
    );

    const request: any = {
      params: { id: 99 },
    };

    const reply: any = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    };

    await expect(
      deleteDispatchRecordController(request, reply)
    ).rejects.toThrowError(NotFound);
  });
});
