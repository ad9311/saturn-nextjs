import { TransactionType } from '@prisma/client';
import prisma, { addCycleBalanceToAccountBalance, addIncomeAmountToCycleBalance } from '.';
import { TransactionFormData } from '@/types';

export async function sumTotalCycleTransactions(cycleId: number, type: TransactionType) {
  const result = await prisma.transaction.aggregate({
    _sum: { amount: true },
    where: { cycleId, type },
  });
  return result._sum.amount;
}

export async function createCycleIncome(transactionFormData: TransactionFormData) {
  const { cycleId } = transactionFormData;
  const cycle = await prisma.cycle.findUnique({
    where: { id: cycleId },
    include: { Account: true },
  });
  if (cycle) {
    const income = await prisma.transaction.create({ data: { ...transactionFormData } });
    await addIncomeAmountToCycleBalance(cycleId, income.id);
    await addCycleBalanceToAccountBalance(cycle.Account.id, cycleId);
    return income;
  }
  throw new Error(`Cycle with id ${cycleId} was not found`);
}

export async function createCycleExpense(transactionFormData: TransactionFormData) {
}
