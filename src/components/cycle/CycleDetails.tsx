import { displayMonth, formatCurrency } from '@/helpers';
import { CycleModel } from '@/types';
import TransactionTable, { TransactionsSummary } from '../transaction';
import { sumTotalCycleTransactions } from '@/db';

async function CycleDetails({ cycle }: { cycle: CycleModel }) {
  const totalIncome = await sumTotalCycleTransactions(cycle.id, 'INCOME');
  const totalExpenses = await sumTotalCycleTransactions(cycle.id, 'EXPENSE');

  return (
    <article>
      <h2>
        {displayMonth(cycle.month)}&nbsp;
        {cycle.year}
      </h2>
      <p>Balance: {formatCurrency(cycle.balance)}</p>
      <section>
        <h3>Income</h3>
        <TransactionTable transactions={cycle.Transactions} />
      </section>
      <section>
        <h3>Expenses</h3>
        <TransactionTable transactions={cycle.Transactions} />
      </section>
      <section>
        <h3>Totals</h3>
        <TransactionsSummary
          cycleBalance={cycle.balance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
      </section>
    </article>
  );
}

export default CycleDetails;
