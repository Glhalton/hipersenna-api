/*
  Warnings:

  - You are about to drop the `hsusers_roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "hsusers_roles" DROP CONSTRAINT "hsusers_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "hsusers_roles" DROP CONSTRAINT "hsusers_roles_user_id_fkey";

-- AlterTable
ALTER TABLE "hsemployees" ADD COLUMN     "role_id" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "hsusers_roles";

-- AddForeignKey
ALTER TABLE "hsemployees" ADD CONSTRAINT "hsemployees_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "hsroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
