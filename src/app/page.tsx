import Link from 'next/link';
import { getCurrentUser, getUserLastCycle } from '@/db';
import CycleDetails from '@/components/cycle';

async function HomePage() {
  const currentUser = await getCurrentUser();
  const lastCycle = await getUserLastCycle(currentUser?.id);

  return (
    <div>
      <h1>Home</h1>
      <Link href="/profile">Profile</Link>
      {lastCycle && <CycleDetails cycle={lastCycle} />}
    </div>
  );
}

export default HomePage;
