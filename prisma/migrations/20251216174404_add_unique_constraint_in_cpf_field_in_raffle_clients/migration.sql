/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `hsraffle_clients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "hsraffle_clients_cpf_key" ON "hsraffle_clients"("cpf");
