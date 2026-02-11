-- CreateEnum
CREATE TYPE "HsGoals" AS ENUM ('AVARIA', 'FATURAMENTO');

-- CreateTable
CREATE TABLE "hsdepartments" (
    "id" SERIAL NOT NULL,
    "winthor_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsdepartments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsgoal_records" (
    "id" SERIAL NOT NULL,
    "department" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "type" "HsGoals",
    "goal_value" INTEGER NOT NULL,
    "goal_month" DATE NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsgoal_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hsgoal_records_branch_id_department_type_goal_month_key" ON "hsgoal_records"("branch_id", "department", "type", "goal_month");

-- AddForeignKey
ALTER TABLE "hsgoal_records" ADD CONSTRAINT "hsgoal_records_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsgoal_records" ADD CONSTRAINT "hsgoal_records_department_fkey" FOREIGN KEY ("department") REFERENCES "hsdepartments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
