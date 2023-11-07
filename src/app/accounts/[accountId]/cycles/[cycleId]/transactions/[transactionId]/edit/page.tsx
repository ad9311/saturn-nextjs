import { getAccountFromId, getCycleFromId, getTransactionFromId } from "@/db";
import { notFound } from "next/navigation";

async function EditTransactionPage({ params }: { params: { accountId: string; cycleId: string, transactionId: string } }) {
  const accountId = Number(params.accountId);
  const cycleId = Number(params.cycleId);
  const transactionId = Number(params.transactionId);

  const account = await getAccountFromId(accountId);
  const cycle = await getCycleFromId(cycleId);
  const transaction = await getTransactionFromId(transactionId);

  if (account && cycle && transaction) {
    
      return (
        <div>EditTransactionPage</div>
      )
  }

  notFound();
}

export default EditTransactionPage
