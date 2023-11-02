import { Cycle, Transaction } from '@prisma/client';

export interface CycleModel extends Cycle {
  Transactions: Transaction[];
}
