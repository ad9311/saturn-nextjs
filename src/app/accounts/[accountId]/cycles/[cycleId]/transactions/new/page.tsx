import { Modal } from '@/components/containers';
import { TransactionForm } from '@/components/transaction';
import { getAccountFromId, getCycleFromId } from '@/db';
import { notFound } from 'next/navigation';

async function NewTransaction({ params }: { params: { accountId: string; cycleId: string } }) {
  const accountId = Number(params.accountId);
  const cycleId = Number(params.cycleId);

  const account = await getAccountFromId(accountId);
  const cycle = await getCycleFromId(cycleId);

  if (account && cycle) {
    return (
      <Modal>
        <TransactionForm />
      </Modal>
    );
  }

  notFound();
}

export default NewTransaction;
