'use server';

import prisma, { getCurrentUser } from '@/db';
import { FormMessage } from '@/types';
import { accountSchema } from '@/types/account';

export async function createAccountAction(_prevState: FormMessage, formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return { message: 'User not found' };
    }

    const accountRawData = {
      bankName: formData.get('bank_name')?.toString(),
      userId: user.id,
    };

    const validation = accountSchema.safeParse(accountRawData);

    if (validation) {
      const accountData = accountSchema.parse(accountRawData);
      const account = await prisma.account.create({ data: { ...accountData } });
      return { message: `The account ${account.bankName} was created!` };
    }
  } catch (error) {
    return { message: 'There was an error creating the account' };
  }
}
