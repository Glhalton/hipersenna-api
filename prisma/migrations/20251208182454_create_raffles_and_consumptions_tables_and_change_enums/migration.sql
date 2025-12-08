/*
  Warnings:

  - The `status` column on the `hsvalidities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `hsvalidity_request_products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `hsvalidity_requests` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `hsusers_roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "HsValiditiesStatus" AS ENUM ('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "HsValidityRequestProductsStatus" AS ENUM ('NAO_ENCONTRADO', 'NAO_VISTORIADO', 'VISTORIADO');

-- CreateEnum
CREATE TYPE "HsValidityRequestsStatus" AS ENUM ('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO', 'EXPIRADO');

-- CreateEnum
CREATE TYPE "HsRafflesStatus" AS ENUM ('ATIVO', 'INATIVO', 'SORTEADO', 'CANCELADO');

-- DropForeignKey
ALTER TABLE "hsusers_roles" DROP CONSTRAINT "hsusers_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "hsusers_roles" DROP CONSTRAINT "hsusers_roles_user_id_fkey";

-- AlterTable
ALTER TABLE "hsemployees" ADD COLUMN     "role_id" INTEGER;

-- AlterTable
ALTER TABLE "hsvalidities" DROP COLUMN "status",
ADD COLUMN     "status" "HsValiditiesStatus" NOT NULL DEFAULT 'PENDENTE';

-- AlterTable
ALTER TABLE "hsvalidity_request_products" DROP COLUMN "status",
ADD COLUMN     "status" "HsValidityRequestProductsStatus" NOT NULL DEFAULT 'NAO_VISTORIADO';

-- AlterTable
ALTER TABLE "hsvalidity_requests" DROP COLUMN "status",
ADD COLUMN     "status" "HsValidityRequestsStatus" NOT NULL DEFAULT 'PENDENTE';

-- DropTable
DROP TABLE "hsusers_roles";

-- DropEnum
DROP TYPE "hsvalidities_status";

-- DropEnum
DROP TYPE "hsvalidity_request_products_status";

-- DropEnum
DROP TYPE "hsvalidity_requests_status";

-- CreateTable
CREATE TABLE "hsconsumer_products" (
    "id" SERIAL NOT NULL,
    "consumption_id" INTEGER,
    "employee_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "product_code" INTEGER NOT NULL,
    "auxiliary_code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" DECIMAL(65,30) NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL,
    "group_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumer_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsconsumption_note" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumption_note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsconsumer_groups" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumer_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsraffles" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "status" "HsRafflesStatus" NOT NULL DEFAULT 'ATIVO',
    "nfc_key" TEXT NOT NULL,
    "raffle_number" TEXT,
    "branch_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsraffles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsraffle_clients" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsraffle_clients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsemployees" ADD CONSTRAINT "hsemployees_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "hsroles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "hsconsumer_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_consumption_id_fkey" FOREIGN KEY ("consumption_id") REFERENCES "hsconsumption_note"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_note" ADD CONSTRAINT "hsconsumption_note_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "hsconsumer_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_note" ADD CONSTRAINT "hsconsumption_note_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsraffles" ADD CONSTRAINT "hsraffles_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "hsraffle_clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
