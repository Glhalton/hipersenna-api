-- AlterTable
ALTER TABLE "hsinventory_adjustments" ADD COLUMN     "status_changed_by_employee_id" INTEGER;

-- AddForeignKey
ALTER TABLE "hsinventory_adjustments" ADD CONSTRAINT "hsinventory_adjustments_status_changed_by_employee_id_fkey" FOREIGN KEY ("status_changed_by_employee_id") REFERENCES "hsemployees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
