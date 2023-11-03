import { AccountModel } from "@/types"

function AccountList({ accounts }: { accounts: AccountModel[] }) {
  const mappedAccounts = accounts.map(account => (
    <li key={account.id}>{account.bankName}</li>
  ));

  return (
    <ul>{mappedAccounts}</ul>
  )
}

export default AccountList
