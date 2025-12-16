/*
  Warnings:

  - You are about to drop the `hsconsumer_groups` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hsconsumer_notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hsconsumer_products` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[description]` on the table `hsbranches` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `hsraffle_clients` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "hsconsumer_products" DROP CONSTRAINT "hsconsumer_products_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumer_products" DROP CONSTRAINT "hsconsumer_products_consumption_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumer_products" DROP CONSTRAINT "hsconsumer_products_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumer_products" DROP CONSTRAINT "hsconsumer_products_group_id_fkey";

-- AlterTable
ALTER TABLE "hsemployees" ALTER COLUMN "winthor_id" DROP DEFAULT;

-- DropTable
DROP TABLE "hsconsumer_groups";

-- DropTable
DROP TABLE "hsconsumer_notes";

-- DropTable
DROP TABLE "hsconsumer_products";

-- CreateTable
CREATE TABLE "hsconsumption_groups" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumption_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsconsumption_notes" (
    "id" SERIAL NOT NULL,
    "generated_by_employee_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumption_notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsconsumption_products" (
    "id" SERIAL NOT NULL,
    "consumption_id" INTEGER,
    "created_by_employee_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "product_code" INTEGER NOT NULL,
    "auxiliary_code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumption_products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hsconsumption_groups_description_key" ON "hsconsumption_groups"("description");

-- CreateIndex
CREATE UNIQUE INDEX "hsbranches_description_key" ON "hsbranches"("description");

-- CreateIndex
CREATE UNIQUE INDEX "hsraffle_clients_cpf_key" ON "hsraffle_clients"("cpf");

-- AddForeignKey
ALTER TABLE "hsconsumption_products" ADD CONSTRAINT "hsconsumption_products_created_by_employee_id_fkey" FOREIGN KEY ("created_by_employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_products" ADD CONSTRAINT "hsconsumption_products_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "hsconsumption_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_products" ADD CONSTRAINT "hsconsumption_products_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_products" ADD CONSTRAINT "hsconsumption_products_consumption_id_fkey" FOREIGN KEY ("consumption_id") REFERENCES "hsconsumption_notes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
