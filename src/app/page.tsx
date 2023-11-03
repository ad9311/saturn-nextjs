import AccountList from '@/components/account';
import { getAccountsFromCurrentUser } from '@/db';

async function HomePage() {
  const accounts = await getAccountsFromCurrentUser();

  return (
    <div>
      <AccountList accounts={accounts} />
    </div>
  );
}

export default HomePage;
