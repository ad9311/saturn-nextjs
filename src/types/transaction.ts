import { TransactionMethod, TransactionType } from '@prisma/client';

export type TransactionFormData = {
  cycleId: number;
  amount: number;
  description: string;
  type: TransactionType;
  method: TransactionMethod;
  methodDescription: string;
};
