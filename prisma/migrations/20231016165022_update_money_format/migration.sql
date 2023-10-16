/*
  Warnings:

  - The `balance` column on the `cycles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `expense_limit` column on the `cycles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Changed the type of `amount` on the `expenses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `amount` on the `incomes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cycles" DROP COLUMN "balance",
ADD COLUMN     "balance" MONEY NOT NULL DEFAULT 0.0,
DROP COLUMN "expense_limit",
ADD COLUMN     "expense_limit" MONEY NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "amount",
ADD COLUMN     "amount" MONEY NOT NULL;

-- AlterTable
ALTER TABLE "incomes" DROP COLUMN "amount",
ADD COLUMN     "amount" MONEY NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255);
