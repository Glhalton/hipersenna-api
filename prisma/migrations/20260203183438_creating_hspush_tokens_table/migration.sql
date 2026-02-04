-- CreateTable
CREATE TABLE "hspush_tokens" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "device_id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_used_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hspush_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hspush_tokens_token_key" ON "hspush_tokens"("token");

-- CreateIndex
CREATE INDEX "hspush_tokens_employee_id_idx" ON "hspush_tokens"("employee_id");

-- AddForeignKey
ALTER TABLE "hspush_tokens" ADD CONSTRAINT "hspush_tokens_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "hsemployees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
