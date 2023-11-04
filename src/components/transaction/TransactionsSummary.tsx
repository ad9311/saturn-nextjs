import { formatCurrency } from '@/helpers';
import { Decimal } from '@prisma/client/runtime/library';

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
          <td>{formatCurrency(cycleBalance)}</td>
          <td>{formatCurrency(totalIncome)}</td>
          <td>{formatCurrency(totalExpenses)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionsSummary;
