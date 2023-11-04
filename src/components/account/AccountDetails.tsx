import { AccountModel } from '@/types';
import CycleDetails from '../cycle';

function AccountDetails({ account }: { account: AccountModel }) {
  const lastCycle = account.Cycles[account.Cycles.length - 1];
  return (
    <>
      <h2>{account.bankName}</h2>
      <CycleDetails cycle={lastCycle} />
    </>
  );
}

export default AccountDetails;
