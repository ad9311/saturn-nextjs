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

export async function addIncomeAmountToCycleBalance(cycleId: number, transactionId: number) {
  const cycle = await prisma.cycle.findUnique({ where: { id: cycleId } });
  const income = await prisma.transaction.findUnique({ where: { id: transactionId } });

  if (cycle === null) {
    throw new Error(`Cycle with id ${cycleId} was not found`);
  }

  if (income === null) {
    throw new Error(`Transaction with id ${transactionId} was not found`);
  }

  return await prisma.cycle.update({
    where: { id: cycleId },
    data: { balance: cycle.balance.toNumber() + income.amount.toNumber() },
  });
}

export async function subsIncomeAmountToCycleBalance(cycleId: number, transactionId: number) {
  const cycle = await prisma.cycle.findUnique({ where: { id: cycleId } });
  const income = await prisma.transaction.findUnique({ where: { id: transactionId } });

  if (cycle === null) {
    throw new Error(`Cycle with id ${cycleId} was not found`);
  }

  if (income === null) {
    throw new Error(`Transaction with id ${transactionId} was not found`);
  }

  return await prisma.cycle.update({
    where: { id: cycleId },
    data: { balance: cycle.balance.toNumber() - income.amount.toNumber() },
  });
}

export async function getCycleFromId(id: number) {
  if (!Number.isInteger(id)) {
    return null;
  }

  return await prisma.cycle.findUnique({ where: { id }});
}
