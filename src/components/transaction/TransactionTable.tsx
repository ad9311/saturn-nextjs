import { TransactionTableProps } from '@/types';
import React from 'react';

function TransactionTable(props: TransactionTableProps) {
  const mappedTransactions = props.transactions.map((transaction) => (
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
