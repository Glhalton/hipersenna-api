/*
  Warnings:

  - Added the required column `employee_id` to the `hsconsumption_note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hsconsumer_groups" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "hsconsumption_note" ADD COLUMN     "employee_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "hsraffle_winners" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsraffle_winners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsraffles" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "nfc_key" TEXT NOT NULL,
    "raffle_number" TEXT,
    "branch_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsraffles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsraffle_clients" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsraffle_clients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hsraffle_winners" ADD CONSTRAINT "hsraffle_winners_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "hsraffle_clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsraffles" ADD CONSTRAINT "hsraffles_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "hsraffle_clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
