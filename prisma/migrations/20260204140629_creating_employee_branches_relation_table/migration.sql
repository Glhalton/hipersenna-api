-- CreateTable
CREATE TABLE "hsemployee_branches" (
    "employee_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsemployee_branches_pkey" PRIMARY KEY ("employee_id","branch_id")
);

-- AddForeignKey
ALTER TABLE "hsemployee_branches" ADD CONSTRAINT "hsemployee_branches_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsemployee_branches" ADD CONSTRAINT "hsemployee_branches_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
