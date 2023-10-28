import { displayMonth } from '@/helpers';
import { CycleModel } from '@/types';

function CycleInfo({ cycle }: { cycle: CycleModel }) {
  return (
    <section>
      <h2>
        {displayMonth(cycle.month)}&nbsp;
        {cycle.year}
      </h2>
      <p>Balance: {cycle.balance.toString()}</p>
    </section>
  );
}

export default CycleInfo;
