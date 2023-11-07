import { AccountModel } from '@/types';
import prisma, { getCurrentUser } from '.';

export async function getUserAccounts(userId: number) {
  return await prisma.account.findMany({
    where: { userId },
    include: { Cycles: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getAccountsFromCurrentUser() {
  const user = await getCurrentUser();

  if (user) {
    return (await getUserAccounts(user.id)) as AccountModel[];
  }

  return [] as AccountModel[];
}

export async function getAccountFromId(id: number) {
  if (!Number.isInteger(id)) {
    return null;
  }

  return prisma.account.findUnique({
    where: { id: id },
    include: { Cycles: { include: { Transactions: true }, orderBy: { createdAt: 'desc' } } },
  });
}

export async function addIncomeAmountToAccountBalance(accountId: number, transactionId: number) {
  const account = await prisma.account.findUnique({ where: { id: accountId } });
  const transaction = await prisma.transaction.findUnique({ where: { id: transactionId } });

  if (account === null) {
    throw new Error(`Account with id ${accountId} was not found`);
  }

  if (transaction === null) {
    throw new Error(`Cycle with id ${transactionId} was not found`);
  }

  return await prisma.account.update({
    where: { id: accountId },
    data: { balance: account.balance.toNumber() + transaction.amount.toNumber() },
  });
}

export async function subsExpenseAmountToAccountBalance(accountId: number, transactionId: number) {
  const account = await prisma.account.findUnique({ where: { id: accountId } });
  const transaction = await prisma.transaction.findUnique({ where: { id: transactionId } });

  if (account === null) {
    throw new Error(`Account with id ${accountId} was not found`);
  }

  if (transaction === null) {
    throw new Error(`Cycle with id ${transactionId} was not found`);
  }

  return await prisma.account.update({
    where: { id: accountId },
    data: { balance: account.balance.toNumber() - transaction.amount.toNumber() },
  });
}
