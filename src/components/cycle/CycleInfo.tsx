import { displayMonth } from '@/helpers';
import { CycleModel } from '@/types';
import TransactionTable from '../transaction';
import TransactionSummary from '../transaction/TransactionSummary';

async function CycleInfo({ cycle }: { cycle: CycleModel }) {
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
        <TransactionSummary />
      </section>
    </article>
  );
}

export default CycleInfo;
