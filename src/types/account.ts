import { Account } from '@prisma/client';
import { CycleModel } from './cycle';

export interface AccountModel extends Account {
  Cycles: CycleModel[];
}
