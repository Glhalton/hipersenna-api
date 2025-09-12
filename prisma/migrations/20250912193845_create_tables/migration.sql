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
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
CREATE TABLE "public"."hsvalidity_request_products" (
    "id" SERIAL NOT NULL,
    "request_id" INTEGER NOT NULL,
    "status" "public"."hsvalidity_request_products_status" NOT NULL DEFAULT 'Não vistoriado',
    "product_cod" INTEGER NOT NULL,
    "validity_date" DATE NOT NULL,

    CONSTRAINT "hsvalidity_request_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsvalidity_requests" (
    "id" SERIAL NOT NULL,
    "branch_id" INTEGER NOT NULL,
    "analyst_id" INTEGER NOT NULL,
    "conferee_id" INTEGER NOT NULL,
    "status" "public"."hsvalidity_requests_status" NOT NULL DEFAULT 'Pendente',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsvalidity_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hsvalidity_treatments" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(150) NOT NULL,

    CONSTRAINT "hsvalidity_treatments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."hsvalidities" ADD CONSTRAINT "fk_validities_branch" FOREIGN KEY ("branch_id") REFERENCES "public"."hsbranches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hsvalidities" ADD CONSTRAINT "fk_validities_request" FOREIGN KEY ("request_id") REFERENCES "public"."hsvalidity_requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_products" ADD CONSTRAINT "fk_validity_products_treat" FOREIGN KEY ("treat_id") REFERENCES "public"."hsvalidity_treatments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_products" ADD CONSTRAINT "fk_validity_products_validities" FOREIGN KEY ("validity_id") REFERENCES "public"."hsvalidities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_request_products" ADD CONSTRAINT "fk_validity_request_products_request" FOREIGN KEY ("request_id") REFERENCES "public"."hsvalidity_requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hsvalidity_requests" ADD CONSTRAINT "fk_validity_requests_branch" FOREIGN KEY ("branch_id") REFERENCES "public"."hsbranches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
