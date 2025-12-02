-- CreateTable
CREATE TABLE "hsconsumer_products" (
    "id" SERIAL NOT NULL,
    "consumption_id" INTEGER,
    "employee_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "product_code" INTEGER NOT NULL,
    "auxiliary_code" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" DECIMAL(65,30) NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL,
    "group_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumer_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsconsumption_note" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,
    "total_price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsconsumption_note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsconsumer_groups" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "hsconsumer_groups_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "hsconsumer_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumer_products" ADD CONSTRAINT "hsconsumer_products_consumption_id_fkey" FOREIGN KEY ("consumption_id") REFERENCES "hsconsumption_note"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_note" ADD CONSTRAINT "hsconsumption_note_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "hsconsumer_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsconsumption_note" ADD CONSTRAINT "hsconsumption_note_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
