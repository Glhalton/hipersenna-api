-- CreateTable
CREATE TABLE "hsdispatch_records" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "nfe_number" TEXT NOT NULL,
    "seal_number" TEXT NOT NULL,
    "bonus_number" TEXT NOT NULL,
    "license_plate" TEXT NOT NULL,
    "created_by_employee_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsdispatch_records_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsdispatch_records" ADD CONSTRAINT "hsdispatch_records_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsdispatch_records" ADD CONSTRAINT "hsdispatch_records_created_by_employee_id_fkey" FOREIGN KEY ("created_by_employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
