import { Decimal } from "@prisma/client/runtime/library";

function TransactionsSummary({
  cycleBalance,
  totalIncome,
  totalExpenses,
}: {
  cycleBalance: Decimal;
  totalIncome: Decimal | null;
  totalExpenses: Decimal | null;
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Balance</th>
          <th>Total income</th>
          <th>Total expenses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cycleBalance.toFixed(2)}</td>
          <td>{totalIncome?.toFixed(2) ?? '0.00'}</td>
          <td>{totalExpenses?.toFixed(2) ?? '0.00'}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionsSummary;
