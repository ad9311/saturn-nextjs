import prisma from '.';

export async function getUserLastCycle(userId: number | undefined) {
  if (userId) {
    return await prisma.cycle.findFirst({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        Expenses: true,
        Incomes: true,
      },
    });
  }

  return null;
}
