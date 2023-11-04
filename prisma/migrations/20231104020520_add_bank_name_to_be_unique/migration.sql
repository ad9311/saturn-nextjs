/*
  Warnings:

  - A unique constraint covering the columns `[bank_name]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "accounts_bank_name_key" ON "accounts"("bank_name");
