import { Cycle, Expense, Income } from '@prisma/client';

export interface CycleModel extends Cycle {
  Expenses: Expense[];
  Incomes: Income[];
}
