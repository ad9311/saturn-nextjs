import prisma from '@/db';
import { AccountDetails } from '@/components/account';
import { notFound } from 'next/navigation';

async function getAccountFromId(id: number) {
  return prisma.account.findUnique({
    where: { id: id },
    include: { Cycles: { include: { Transactions: true } } },
  });
}

async function AccountPage({ params }: { params: { id: string } }) {
  const accountId = Number(params.id);
  const account = await getAccountFromId(Number.isInteger(accountId) ? accountId : 0);
  if (account) {
    return <AccountDetails account={account} />;
  }

  notFound();
}

export default AccountPage;
