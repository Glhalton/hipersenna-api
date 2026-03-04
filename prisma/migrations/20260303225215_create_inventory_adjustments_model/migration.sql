/*
  Warnings:

  - You are about to drop the `hsdiscrepancy_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "HsInventoryAdjustmentStatus" AS ENUM ('NEGADO', 'PENDENTE', 'AJUSTADO');

-- DropForeignKey
ALTER TABLE "hsdiscrepancy_products" DROP CONSTRAINT "hsdiscrepancy_products_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "hsdiscrepancy_products" DROP CONSTRAINT "hsdiscrepancy_products_created_by_employee_id_fkey";

-- DropTable
DROP TABLE "hsdiscrepancy_products";

-- CreateTable
CREATE TABLE "hsinventory_adjustments" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "created_by_employee_id" INTEGER NOT NULL,
    "product_code" INTEGER NOT NULL,
    "auxiliary_code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" "HsInventoryAdjustmentStatus" NOT NULL DEFAULT 'PENDENTE',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsinventory_adjustments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsinventory_adjustments" ADD CONSTRAINT "hsinventory_adjustments_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsinventory_adjustments" ADD CONSTRAINT "hsinventory_adjustments_created_by_employee_id_fkey" FOREIGN KEY ("created_by_employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
