import prisma from '.';

export async function sumTotalCycleExpenses(cycleId: number) {
  const result = await prisma.transaction.aggregate({ _sum: { amount: true }, where: { cycleId } });
  return result._sum.amount;
}
