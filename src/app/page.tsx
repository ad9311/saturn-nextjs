import Link from 'next/link';
import { getCurrentUser, getUserLastCycle } from '@/db';
import CycleInfo from '@/components/cycle/CycleInfo';

async function HomePage() {
  const currentUser = await getCurrentUser();
  const lastCycle = await getUserLastCycle(currentUser?.id);

  return (
    <div>
      <h1>Home</h1>
      <Link href="/profile">Profile</Link>
      {lastCycle && <CycleInfo cycle={lastCycle} />}
    </div>
  );
}

export default HomePage;
