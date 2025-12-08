-- DropForeignKey
ALTER TABLE "hsemployees" DROP CONSTRAINT "hsemployees_role_id_fkey";

-- AlterTable
ALTER TABLE "hsemployees" ALTER COLUMN "role_id" DROP NOT NULL,
ALTER COLUMN "role_id" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "hsemployees" ADD CONSTRAINT "hsemployees_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "hsroles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
