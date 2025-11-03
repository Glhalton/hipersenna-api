-- AlterTable
ALTER TABLE "public"."hsvalidity_products" ALTER COLUMN "auxiliary_code" DROP DEFAULT,
ALTER COLUMN "auxiliary_code" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "public"."hsvalidity_request_products" ALTER COLUMN "auxiliary_code" DROP DEFAULT,
ALTER COLUMN "auxiliary_code" SET DATA TYPE BIGINT;
