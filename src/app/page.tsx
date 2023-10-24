import Link from 'next/link';
import { getServerSession } from 'next-auth';
import prisma from '@/db/prisma';
import CycleInfo from '@/components/cycle/CycleInfo';

async function getLastCycle() {
  const session = await getServerSession();
  const email = session?.user?.email;
  const user = await prisma.user.findUnique({ where: { email: `${email}` } });

  if (user) {
    const lastCycle = await prisma.cycle.findFirst({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        Expenses: true,
        Incomes: true,
      },
    });

    return lastCycle;
  }

  return null;
}

async function HomePage() {
  const lastCycle = await getLastCycle();

  return (
    <div>
      <h1>Home</h1>
      <Link href="/profile">Profile</Link>
      {lastCycle && <CycleInfo cycle={lastCycle} />}
    </div>
  );
}

export default HomePage;
