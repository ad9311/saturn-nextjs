import { displayMonth } from '@/helpers';
import { CycleModel } from '@/types';
import TransactionTable, { TransactionsSummary } from '../transaction';
import { sumTotalCycleExpenses, sumTotalCycleIncomes } from '@/db';

async function CycleInfo({ cycle }: { cycle: CycleModel }) {
  const totalIncome = await sumTotalCycleIncomes(cycle.id);
  const totalExpenses = await sumTotalCycleExpenses(cycle.id);

  return (
    <article>
      <h2>
        {displayMonth(cycle.month)}&nbsp;
        {cycle.year}
      </h2>
      <p>Balance: {cycle.balance.toString()}</p>
      <section>
        <h3>Income</h3>
        <TransactionTable transactions={cycle.Incomes} type="income" />
      </section>
      <section>
        <h3>Expenses</h3>
        <TransactionTable transactions={cycle.Expenses} type="expense" />
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

export default CycleInfo;
