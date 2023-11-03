import { AccountModel } from "@/types";
import prisma, { getCurrentUser } from ".";

export async function getUserAccounts(userId: number) {
  return await prisma.account.findMany({ where: { userId }, include: { Cycles: true }});
}

export async function getAccountsFromCurrentUser() {
  const user = await getCurrentUser();

  if (user) {
    return await getUserAccounts(user.id) as AccountModel[];
  }

  return [] as AccountModel[];
}
