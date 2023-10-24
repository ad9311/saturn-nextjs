import { CycleModel } from '@/types';

function CycleInfo({ cycle }: { cycle: CycleModel }) {
  return (
    <article>
      <h2>
        {cycle.month}
        {cycle.year}
      </h2>
    </article>
  );
}

export default CycleInfo;
