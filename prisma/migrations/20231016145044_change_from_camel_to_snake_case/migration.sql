/*
  Warnings:

  - You are about to drop the `Cycle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cycle";

-- CreateTable
CREATE TABLE "cycles" (
    "id" SERIAL NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "expense_limit" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cycles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cycles_month_year_idx" ON "cycles"("month", "year");
