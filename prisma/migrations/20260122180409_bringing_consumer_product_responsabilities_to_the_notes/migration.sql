/*
  Warnings:

  - You are about to drop the column `generated_by_employee_id` on the `hsconsumption_notes` table. All the data in the column will be lost.
  - You are about to drop the column `branch_id` on the `hsconsumption_products` table. All the data in the column will be lost.
  - You are about to drop the column `consumption_id` on the `hsconsumption_products` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `hsconsumption_products` table. All the data in the column will be lost.
  - You are about to drop the column `created_by_employee_id` on the `hsconsumption_products` table. All the data in the column will be lost.
  - You are about to drop the column `group_id` on the `hsconsumption_products` table. All the data in the column will be lost.
  - You are about to drop the column `modified_at` on the `hsconsumption_products` table. All the data in the column will be lost.
  - Added the required column `branch_id` to the `hsconsumption_notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_employee_id` to the `hsconsumption_notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_id` to the `hsconsumption_notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumption_note_id` to the `hsconsumption_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hsconsumption_products" DROP CONSTRAINT "hsconsumption_products_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumption_products" DROP CONSTRAINT "hsconsumption_products_consumption_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumption_products" DROP CONSTRAINT "hsconsumption_products_created_by_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumption_products" DROP CONSTRAINT "hsconsumption_products_group_id_fkey";

-- AlterTable
ALTER TABLE "hsconsumption_notes" DROP COLUMN "generated_by_employee_id",
ADD COLUMN     "branch_id" INTEGER NOT NULL,
ADD COLUMN     "created_by_employee_id" INTEGER NOT NULL,
ADD COLUMN     "group_id" INTEGER NOT NULL,
ADD COLUMN     "signature" TEXT;

-- AlterTable
ALTER TABLE "hsconsumption_products" DROP COLUMN "branch_id",
DROP COLUMN "consumption_id",
DROP COLUMN "created_at",
DROP COLUMN "created_by_employee_id",
DROP COLUMN "group_id",
DROP COLUMN "modified_at",
ADD COLUMN     "consumption_note_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "hsconsumption_notes" ADD CONSTRAINT "hsconsumption_notes_created_by_employee_id_fkey" FOREIGN KEY ("created_by_employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_notes" ADD CONSTRAINT "hsconsumption_notes_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "hsconsumption_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_notes" ADD CONSTRAINT "hsconsumption_notes_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_products" ADD CONSTRAINT "hsconsumption_products_consumption_note_id_fkey" FOREIGN KEY ("consumption_note_id") REFERENCES "hsconsumption_notes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
