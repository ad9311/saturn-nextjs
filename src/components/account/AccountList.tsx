import { AccountModel } from '@/types';
import Link from 'next/link';

function AccountList({ accounts }: { accounts: AccountModel[] }) {
  const mappedAccounts = accounts.map((account) => <li key={account.id}>{account.bankName}</li>);

  return (
    <div>
      <Link href="/accounts/new">New Bank Account</Link>
      <ul>{mappedAccounts}</ul>
    </div>
  );
}

export default AccountList;
