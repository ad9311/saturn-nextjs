import { User } from '@prisma/client';
import { z } from 'zod';
import { AccountModel } from './account';

export interface UserModel extends User {
  Accounts: AccountModel[];
}

export type GitHubUser = {
  name: string;
  email: string;
  image: string;
};

export const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  image: z.string().url(),
});
