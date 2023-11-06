import { getAccountFromId } from '@/db';
import { AccountDetails } from '@/components/account';
import { notFound } from 'next/navigation';

async function AccountPage({ params }: { params: { accountId: string } }) {
  const accountId = Number(params.accountId);
  const account = await getAccountFromId(accountId);
  if (account) {
    return <AccountDetails account={account} />;
  }

  notFound();
}

export default AccountPage;
