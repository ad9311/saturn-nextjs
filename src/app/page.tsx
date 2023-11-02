import Link from 'next/link';
import { getCurrentUser, getUserLastCycle } from '@/db';

async function HomePage() {
  const currentUser = await getCurrentUser();

  return (
    <div>
      <h1>Home</h1>
      <Link href="/profile">Profile</Link>
    </div>
  );
}

export default HomePage;
