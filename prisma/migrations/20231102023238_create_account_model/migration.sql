/*
  Warnings:

  - You are about to drop the column `user_id` on the `cycles` table. All the data in the column will be lost.
  - You are about to drop the `expenses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `incomes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `account_id` to the `cycles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionMethod" AS ENUM ('TRANSFER', 'DEBIT_CARD', 'CREDIT_CARD', 'WITHDRAWAL', 'DEPOSIT');

-- DropForeignKey
ALTER TABLE "cycles" DROP CONSTRAINT "cycles_user_id_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_cycle_id_fkey";

-- DropForeignKey
ALTER TABLE "incomes" DROP CONSTRAINT "incomes_cycle_id_fkey";

-- AlterTable
ALTER TABLE "cycles" DROP COLUMN "user_id",
ADD COLUMN     "account_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "expenses";

-- DropTable
DROP TABLE "incomes";

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "bank_name" TEXT NOT NULL,
    "balance" MONEY NOT NULL DEFAULT 0.0,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "amount" MONEY NOT NULL,
    "description" TEXT NOT NULL,
    "method" "TransactionMethod" NOT NULL DEFAULT 'TRANSFER',
    "method_description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "cycle_id" INTEGER NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cycles" ADD CONSTRAINT "cycles_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_cycle_id_fkey" FOREIGN KEY ("cycle_id") REFERENCES "cycles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
