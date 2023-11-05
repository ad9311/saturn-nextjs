import { getAccountsFromCurrentUser } from '@/db';

async function AccountsPage() {
  const accounts = await getAccountsFromCurrentUser();
  const mappedAccounts = accounts.map(account => (
    <li key={account.id}>{account.bankName}</li>
  ));

  return <ul>{mappedAccounts}</ul>;
}

export default AccountsPage;
