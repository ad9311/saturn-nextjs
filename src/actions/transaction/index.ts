import { createCycleExpense, createCycleIncome } from "@/db/transaction";
import { FormMessage, transactionSchema } from "@/types";
import { TransactionMethod, TransactionType } from "@prisma/client";

export async function createTransactionAction(_prevState: FormMessage, formData: FormData) {
  try {
    const transactionRawData = {
      cycleId: formData.get('cycle_id')?.toString(),
      amount: formData.get('amount')?.toString(),
      description: formData.get('description')?.toString(),
      type: formData.get('type')?.toString(),
      method: formData.get('method')?.toString(),
      methodDescription: formData.get('method-description')?.toString(),
    };

    const validation = transactionSchema.safeParse(transactionRawData);

    if (validation.success) {
      const transactionData = transactionSchema.parse(transactionRawData);
      if (transactionData.method === 'INCOME') {
        await createCycleIncome(transactionData);
        return { message: 'Income transaction was successfully created' }
      } else {
        await createCycleExpense(transactionData);
        return { message: 'Expense transaction was successfully created' }
      }
    }
  } catch (error) {
    return { message: 'There was an error creating the transaction' };
  }
}
