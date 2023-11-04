import prisma from '@/db';
import { notFound } from 'next/navigation';

async function getAccountFromId(id: number) {
  return prisma.account.findUnique({ where: { id: id } });
}

async function AccountPage({ params }: { params: { id: string } }) {
  const accountId = Number(params.id);
  const account = await getAccountFromId(Number.isInteger(accountId) ? accountId : 0);
  if (account) {
    return <div>AccountPage</div>;
  }

  notFound();
}

export default AccountPage;
