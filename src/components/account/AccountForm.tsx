'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createAccountAction } from '.';

const initialState = {
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

function AccountForm() {
  const [state, formAction] = useFormState(createAccountAction, initialState);

  return (
    <form id="new_bank_account" action={formAction}>
      <label htmlFor="bank_name">
        Bank name
        <input type="text" id="bank_name" name="bank_name" required />
      </label>
      <label htmlFor="submit">
        <SubmitInput />
      </label>
      <p>{state.message}</p>
    </form>
  );
}

export default AccountForm;
