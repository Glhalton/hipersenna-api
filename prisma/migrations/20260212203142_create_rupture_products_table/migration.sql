-- CreateTable
CREATE TABLE "hsrupture_products" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "created_by_employee_id" INTEGER NOT NULL,
    "product_code" INTEGER NOT NULL,
    "auxiliary_code" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsrupture_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsrupture_products" ADD CONSTRAINT "hsrupture_products_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsrupture_products" ADD CONSTRAINT "hsrupture_products_created_by_employee_id_fkey" FOREIGN KEY ("created_by_employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
