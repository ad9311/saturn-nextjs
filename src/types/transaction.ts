import { TransactionMethod, TransactionType } from '@prisma/client';
import { z } from 'zod';

export type TransactionFormData = {
  cycleId: number;
  amount: number;
  description: string;
  type: string;
  method: string;
  methodDescription: string;
};

function isTransactionType(input: string): input is TransactionType {
  return input === 'INCOME' || input === 'EXPENSE';
}

function isTransactionMethod(str: string): str is TransactionMethod {
  switch (str) {
    case 'TRANSFER':
    case 'DEBIT_CARD':
    case 'CREDIT_CARD':
    case 'WITHDRAWAL':
    case 'DEPOSIT':
      return true;  
    default:
      return false;
  }
}

export const transactionSchema = z.object({
  cycleId: z.number(),
  amount: z.number(),
  description: z.string().min(1).max(50),
  type: z.custom<TransactionMethod>((val) => isTransactionMethod(val as string)),
  method: z.custom<TransactionType>((val) => isTransactionType(val as string)),
  methodDescription: z.string().min(1).max(50),
});
