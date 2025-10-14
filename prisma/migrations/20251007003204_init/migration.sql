-- CreateEnum
CREATE TYPE "public"."hsvalidities_status" AS ENUM ('Pendente', 'Em andamento', 'Concluído');

-- CreateEnum
CREATE TYPE "public"."hsvalidity_request_products_status" AS ENUM ('Não encontrado', 'Não vistoriado', 'Vistoriado');

-- CreateEnum
CREATE TYPE "public"."hsvalidity_requests_status" AS ENUM ('Pendente', 'Em andamento', 'Concluído', 'Expirado');

-- CreateTable
CREATE TABLE "public"."hsaccess_levels" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(150) NOT NULL,

    CONSTRAINT "hsaccess_levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsbranches" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(150) NOT NULL,

    CONSTRAINT "hsbranches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsvalidities" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "status" "public"."hsvalidities_status" NOT NULL DEFAULT 'Pendente',
    "request_id" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsvalidities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsvalidity_products" (
    "id" SERIAL NOT NULL,
    "validity_id" INTEGER NOT NULL,
    "product_cod" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "validity_date" DATE NOT NULL,
    "treat_id" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "hsvalidity_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsvalidity_requests" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "analyst_id" INTEGER NOT NULL,
    "conferee_id" INTEGER NOT NULL,
    "status" "public"."hsvalidity_requests_status" NOT NULL DEFAULT 'Pendente',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsvalidity_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsvalidity_request_products" (
    "id" SERIAL NOT NULL,
    "request_id" INTEGER NOT NULL,
    "status" "public"."hsvalidity_request_products_status" NOT NULL DEFAULT 'Não vistoriado',
    "product_cod" INTEGER NOT NULL,
    "validity_date" DATE NOT NULL,

    CONSTRAINT "hsvalidity_request_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsvalidity_treatments" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(150) NOT NULL,

    CONSTRAINT "hsvalidity_treatments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsemployees" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "access_level" INTEGER NOT NULL,
    "winthor_id" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsemployees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hssessions" (
    "id" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3),

    CONSTRAINT "hssessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hsemployees_winthor_id_key" ON "public"."hsemployees"("winthor_id");

-- CreateIndex
CREATE UNIQUE INDEX "hsemployees_username_key" ON "public"."hsemployees"("username");

-- CreateIndex
CREATE UNIQUE INDEX "hssessions_token_key" ON "public"."hssessions"("token");

-- AddForeignKey
ALTER TABLE "public"."hsvalidities" ADD CONSTRAINT "hsvalidities_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "public"."hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidities" ADD CONSTRAINT "hsvalidities_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "public"."hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidities" ADD CONSTRAINT "hsvalidities_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "public"."hsvalidity_requests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_products" ADD CONSTRAINT "hsvalidity_products_treat_id_fkey" FOREIGN KEY ("treat_id") REFERENCES "public"."hsvalidity_treatments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_products" ADD CONSTRAINT "hsvalidity_products_validity_id_fkey" FOREIGN KEY ("validity_id") REFERENCES "public"."hsvalidities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_requests" ADD CONSTRAINT "hsvalidity_requests_analyst_id_fkey" FOREIGN KEY ("analyst_id") REFERENCES "public"."hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_requests" ADD CONSTRAINT "hsvalidity_requests_conferee_id_fkey" FOREIGN KEY ("conferee_id") REFERENCES "public"."hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_requests" ADD CONSTRAINT "hsvalidity_requests_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "public"."hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_request_products" ADD CONSTRAINT "hsvalidity_request_products_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "public"."hsvalidity_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsemployees" ADD CONSTRAINT "hsemployees_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "public"."hsbranches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsemployees" ADD CONSTRAINT "hsemployees_access_level_fkey" FOREIGN KEY ("access_level") REFERENCES "public"."hsaccess_levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hssessions" ADD CONSTRAINT "hssessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."hsemployees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
