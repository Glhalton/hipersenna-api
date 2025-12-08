/*
  Warnings:

  - Made the column `role_id` on table `hsemployees` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "hsemployees" DROP CONSTRAINT "hsemployees_role_id_fkey";

-- AlterTable
ALTER TABLE "hsemployees" ALTER COLUMN "role_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "hsemployees" ADD CONSTRAINT "hsemployees_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "hsroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
