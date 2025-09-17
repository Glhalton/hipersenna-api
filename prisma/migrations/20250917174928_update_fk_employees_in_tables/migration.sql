-- AlterTable
ALTER TABLE "public"."hsvalidities" ALTER COLUMN "employee_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."hsvalidity_requests" ALTER COLUMN "analyst_id" SET DATA TYPE TEXT,
ALTER COLUMN "conferee_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "public"."hsvalidities" ADD CONSTRAINT "fk_validities_employee" FOREIGN KEY ("employee_id") REFERENCES "public"."hsemployees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_requests" ADD CONSTRAINT "fk_validity_request_analyst" FOREIGN KEY ("analyst_id") REFERENCES "public"."hsemployees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_requests" ADD CONSTRAINT "fk_validity_request_conferee" FOREIGN KEY ("conferee_id") REFERENCES "public"."hsemployees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
