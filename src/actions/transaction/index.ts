'use server';

import { createCycleExpense, createCycleIncome } from '@/db/transaction';
import { FormMessage, transactionSchema } from '@/types';

export async function createTransactionAction(_prevState: FormMessage, formData: FormData) {
  try {
    const transactionRawData = {
      cycleId: Number(formData.get('cycle_id')),
      amount: Number(formData.get('amount')?.toString()),
      description: formData.get('description')?.toString(),
      type: formData.get('type')?.toString(),
      method: formData.get('method')?.toString(),
      methodDescription: formData.get('method_description')?.toString(),
    };
    
    const validation = transactionSchema.safeParse(transactionRawData);
    console.log(formData.get('type'));

    if (validation.success) {
      const transactionData = transactionSchema.parse(transactionRawData);
      if (transactionData.type === 'INCOME') {
        await createCycleIncome(transactionData);
        return { message: 'Income transaction was successfully created' };
      } else {
        await createCycleExpense(transactionData);
        return { message: 'Expense transaction was successfully created' };
      }
    }
    console.log(validation.error.errors.map(e => e));
    return { message: 'Error, check form values' }
  } catch (error) {
    return { message: 'There was an error creating the transaction' };
  }
}
