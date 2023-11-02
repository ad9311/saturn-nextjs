import Link from 'next/link';

async function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/profile">Profile</Link>
    </div>
  );
}

export default HomePage;
