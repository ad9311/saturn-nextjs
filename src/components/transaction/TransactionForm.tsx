'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createTransactionAction } from '@/actions/transaction';
import { FormMessage } from '@/types';

const initialState: FormMessage = {
  message: null,
};

function SubmitInput() {
  const { pending } = useFormStatus();

  return (
    <input
      type="submit"
      id="submit"
      name="submit"
      value="Submit"
      className={pending ? 'text-red-500 font-bold' : ''}
    />
  );
}

function TransactionForm() {
  const [state, formAction] = useFormState(createTransactionAction, initialState);

  return (
    <form className="form" action={formAction}>
      <input type="hidden" id="cycle_id" name="cycle_id" defaultValue="3" />
      <label htmlFor="description">
        Description
        <textarea name="description" id="description" placeholder="Description" />
      </label>
      <label htmlFor="amount">
        Amount
        <input type="number" name="amount" id="name" step="0.01" placeholder="0" />
      </label>
      <label htmlFor="type">
        Type
        <select name="type" id="type">
          <option value="INCOME" id="income">
            Income
          </option>
          <option value="EXPENSE" id="expense">
            Expense
          </option>
        </select>
      </label>
      <label htmlFor="method">
        Method
        <select name="method" id="method">
          <option value="TRANSFER" id="transfer">
            Transfer
          </option>
        </select>
      </label>
      <label htmlFor="method_description">
        Method description
        <textarea name="method_description" id="method_description" placeholder="Method description" />
      </label>
      <label htmlFor="submit">
        <SubmitInput />
      </label>
      <p>{state?.message}</p>
    </form>
  );
}

export default TransactionForm;
