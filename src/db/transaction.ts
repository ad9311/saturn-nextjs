import { TransactionType } from '@prisma/client';
import prisma from '.';
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
  try {
    const cycle = await prisma.cycle.findUnique({
      where: { id: cycleId },
      include: { Account: true },
    });
    if (cycle) {
      const income = await prisma.transaction.create({ data: { ...transactionFormData } });
      await prisma.cycle.update({
        where: { id: cycleId },
        data: { balance: cycle.balance.toNumber() + income.amount.toNumber() },
      });
      await prisma.account.update({
        where: { id: cycle.Account.id },
        data: { balance: cycle.Account.balance.toNumber() + cycle.balance.toNumber() },
      });
      return { data: income, error: null };
    }
    return { error: 'Cycle does not exist' };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function createCycleExpense(transactionFormData: TransactionFormData) {
  const { cycleId } = transactionFormData;
  try {
    const cycle = await prisma.cycle.findUnique({
      where: { id: cycleId },
      include: { Account: true },
    });
    if (cycle) {
      const expense = await prisma.transaction.create({ data: { ...transactionFormData } });
      await prisma.cycle.update({
        where: { id: cycleId },
        data: { balance: cycle.balance.toNumber() - expense.amount.toNumber() },
      });
      await prisma.account.update({
        where: { id: cycle.Account.id },
        data: { balance: cycle.Account.balance.toNumber() - cycle.balance.toNumber() },
      });
      return { data: expense, error: null };
    }
    return { error: 'Cycle does not exist' };
  } catch (error) {
    return { error: (error as Error).message };
  }
}
