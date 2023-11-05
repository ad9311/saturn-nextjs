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
