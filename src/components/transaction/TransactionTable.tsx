import { Transaction } from "@prisma/client";

function TransactionTable({ transactions }: { transactions: Transaction[] }) {
  const mappedTransactions = transactions.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.description}</td>
      <td>{transaction.amount.toFixed(2)}</td>
      <td>{transaction.createdAt.toDateString()}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{mappedTransactions}</tbody>
    </table>
  );
}

export default TransactionTable;
