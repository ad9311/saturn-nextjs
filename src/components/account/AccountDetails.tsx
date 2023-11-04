import { AccountModel } from '@/types';

function AccountDetails({ account }: { account: AccountModel }) {
  return <div>{account.bankName}</div>;
}

export default AccountDetails;
