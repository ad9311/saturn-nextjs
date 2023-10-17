import prisma from '../prisma';

async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } });
}

export default getUserByEmail;
