import { getServerSession } from 'next-auth';
import prisma from '.';

export async function getCurrentUser() {
  const session = await getServerSession();
  return await prisma.user.findUnique({ where: { email: `${session?.user?.email}` } });
}
