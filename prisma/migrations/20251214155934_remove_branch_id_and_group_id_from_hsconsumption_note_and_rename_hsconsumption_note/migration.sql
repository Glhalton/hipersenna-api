/*
  Warnings:

  - You are about to drop the `hsconsumption_note` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "hsconsumer_products" DROP CONSTRAINT "hsconsumer_products_consumption_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumption_note" DROP CONSTRAINT "hsconsumption_note_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "hsconsumption_note" DROP CONSTRAINT "hsconsumption_note_group_id_fkey";

-- DropTable
DROP TABLE "hsconsumption_note";

-- CreateTable
CREATE TABLE "hsconsumer_notes" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumer_notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_consumption_id_fkey" FOREIGN KEY ("consumption_id") REFERENCES "hsconsumer_notes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
