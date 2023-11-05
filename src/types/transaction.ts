import { TransactionMethod } from '@prisma/client';

export type TransactionFormData = {
  cycleId: number;
  amount: number;
  description: string;
  method: TransactionMethod;
  methodDescription: string;
};
