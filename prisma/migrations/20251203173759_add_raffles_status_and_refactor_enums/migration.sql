/*
  Warnings:

  - The `status` column on the `hsvalidities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `hsvalidity_request_products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `hsvalidity_requests` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `hsraffle_winners` table. If the table is not empty, all the data it contains will be lost.

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
ALTER TABLE "hsraffle_winners" DROP CONSTRAINT "hsraffle_winners_client_id_fkey";

-- AlterTable
ALTER TABLE "hsraffles" ADD COLUMN     "status" "HsRafflesStatus" NOT NULL DEFAULT 'ATIVO';

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
DROP TABLE "hsraffle_winners";

-- DropEnum
DROP TYPE "hsvalidities_status";

-- DropEnum
DROP TYPE "hsvalidity_request_products_status";

-- DropEnum
DROP TYPE "hsvalidity_requests_status";
