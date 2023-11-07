'use server';

import prisma, { getCurrentUser } from '@/db';
import { getCurrentMonthYear } from '@/helpers';
import { FormMessage, accountSchema } from '@/types';

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

    if (validation.success) {
      const accountData = accountSchema.parse(accountRawData);
      const account = await prisma.account.create({ data: { ...accountData } });
      const monthAndYear = getCurrentMonthYear();
      await prisma.cycle.create({
        data: {
          ...monthAndYear,
          accountId: account.id,
        },
      });
      return { message: `The account ${account.bankName} was created!` };
    }
    return { message: 'Error, check form values' };
  } catch (error) {
    return { message: 'There was an error creating the account' };
  }
}
