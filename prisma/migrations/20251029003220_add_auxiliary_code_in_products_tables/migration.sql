-- AlterTable
ALTER TABLE "public"."hsvalidity_products" ADD COLUMN     "auxiliary_code" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."hsvalidity_request_products" ADD COLUMN     "auxiliary_code" INTEGER NOT NULL DEFAULT 0;
