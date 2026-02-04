-- CreateTable
CREATE TABLE "hsnotifications" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "reference_id" INTEGER,
    "read_at" TIMESTAMP(3),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsnotifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsnotifications" ADD CONSTRAINT "hsnotifications_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "hsemployees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
