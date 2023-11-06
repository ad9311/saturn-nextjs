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
  return prisma.account.findUnique({
    where: { id: id },
    include: { Cycles: { include: { Transactions: true }, orderBy: { createdAt: 'desc' } } },
  });
}

export async function AddCycleBalanceToAccountBalance(accountId: number, cycleId: number) {
  const account = await prisma.account.findUnique({ where: { id: accountId }});
  const cycle = await prisma.cycle.findUnique({ where: { id: cycleId }});

  if (account === null) {
    throw new Error(`Account with id ${accountId} was not found`);
  }
  
  if (cycle === null) {
    throw new Error(`Cycle with id ${cycleId} was not found`);
  }

  return await prisma.account.update({
    where: { id: accountId },
    data: { balance: account.balance.toNumber() + cycle.balance.toNumber() },
  });
}
