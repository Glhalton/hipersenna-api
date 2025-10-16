/*
  Warnings:

  - You are about to drop the column `access_level` on the `hsemployees` table. All the data in the column will be lost.
  - You are about to drop the `hsaccess_levels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."hsemployees" DROP CONSTRAINT "hsemployees_access_level_fkey";

-- AlterTable
ALTER TABLE "public"."hsemployees" DROP COLUMN "access_level";

-- DropTable
DROP TABLE "public"."hsaccess_levels";

-- CreateTable
CREATE TABLE "public"."hsroles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hsroles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hspermissions" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hspermissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hspermissions_roles" (
    "role_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "hspermissions_roles_pkey" PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "public"."hsusers_permissions" (
    "user_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,

    CONSTRAINT "hsusers_permissions_pkey" PRIMARY KEY ("user_id","permission_id")
);

-- CreateTable
CREATE TABLE "public"."hsusers_roles" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "hsusers_roles_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hsroles_name_key" ON "public"."hsroles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "hspermissions_name_key" ON "public"."hspermissions"("name");

-- AddForeignKey
ALTER TABLE "public"."hspermissions_roles" ADD CONSTRAINT "hspermissions_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."hsroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hspermissions_roles" ADD CONSTRAINT "hspermissions_roles_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "public"."hspermissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsusers_permissions" ADD CONSTRAINT "hsusers_permissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsusers_permissions" ADD CONSTRAINT "hsusers_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "public"."hspermissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsusers_roles" ADD CONSTRAINT "hsusers_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."hsemployees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."hsusers_roles" ADD CONSTRAINT "hsusers_roles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."hsroles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
