/*
  Warnings:

  - You are about to drop the column `total_price` on the `hsconsumer_products` table. All the data in the column will be lost.
  - You are about to drop the column `unit_price` on the `hsconsumer_products` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `hsconsumption_note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hsconsumer_products" DROP COLUMN "total_price",
DROP COLUMN "unit_price";

-- AlterTable
ALTER TABLE "hsconsumption_note" DROP COLUMN "total_price";
