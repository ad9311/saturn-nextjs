import prisma from '.';

export async function getUserLastCycle(accountId: number) {
  return await prisma.cycle.findFirst({
    where: {
      accountId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Transactions: true,
    },
  });
}
