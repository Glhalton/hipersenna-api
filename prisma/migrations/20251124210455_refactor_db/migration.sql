/*
  Warnings:

  - You are about to drop the column `product_cod` on the `hsvalidity_products` table. All the data in the column will be lost.
  - You are about to drop the column `product_cod` on the `hsvalidity_request_products` table. All the data in the column will be lost.
  - You are about to drop the `hspermissions_roles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `product_code` to the `hsvalidity_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_code` to the `hsvalidity_request_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hspermissions_roles" DROP CONSTRAINT "hspermissions_roles_permission_id_fkey";

-- DropForeignKey
ALTER TABLE "hspermissions_roles" DROP CONSTRAINT "hspermissions_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "hsusers_permissions" DROP CONSTRAINT "hsusers_permissions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "hsusers_roles" DROP CONSTRAINT "hsusers_roles_user_id_fkey";

-- AlterTable
ALTER TABLE "hsvalidity_products"
RENAME COLUMN "product_cod" TO "product_code";

-- AlterTable
ALTER TABLE "hsvalidity_request_products"
RENAME COLUMN "product_cod" TO "product_code";

-- DropTable
DROP TABLE "hspermissions_roles";

-- CreateTable
CREATE TABLE "hsroles_permissions" (
    "role_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "hsroles_permissions_pkey" PRIMARY KEY ("role_id","permission_id")
);

-- AddForeignKey
ALTER TABLE "hsroles_permissions" ADD CONSTRAINT "hsroles_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "hspermissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsroles_permissions" ADD CONSTRAINT "hsroles_permissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "hsroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsusers_permissions" ADD CONSTRAINT "hsusers_permissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "hsemployees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsusers_roles" ADD CONSTRAINT "hsusers_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "hsemployees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
