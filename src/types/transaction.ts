import { Expense, Income } from '@prisma/client';

export type TransactionType = 'expense' | 'income';

export type Transaction = Income | Expense;

export type TransactionTableProps = {
  type: TransactionType;
  transactions: Transaction[];
};
