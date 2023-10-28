import prisma from '.';

export async function sumTotalCycleIncomes(cycleId: number) {
  const result = await prisma.income.aggregate({ _sum: { amount: true }, where: { cycleId } });
  return result._sum.amount;
}
