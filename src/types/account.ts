import { Account } from '@prisma/client';
import { CycleModel } from './cycle';
import { z } from 'zod';

export interface AccountModel extends Account {
  Cycles: CycleModel[];
}

export const accountSchema = z.object({
  bankName: z.string().max(20),
  userId: z.number(),
});
