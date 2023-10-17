import UserInfo from '@/components/user/UserInfo';
import Link from 'next/link';

function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
      <Link href="/">Back</Link>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
