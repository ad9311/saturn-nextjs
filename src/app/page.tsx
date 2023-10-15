import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/profile">Profile</Link>
    </div>
  )
}

export default HomePage;
