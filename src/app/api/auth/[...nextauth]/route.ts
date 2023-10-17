import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '@/db/prisma';

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn(data) {
      const user = await prisma.user.findUnique({ where: { email: data.user.email ?? '' }});
      if (user) {
        return true;
      } else {
        const { name, email, image } = data.user;
        if (name && email && image) {
          const userData = {
            name,
            email,
            image,
          };
          const user = await prisma.user.create({ data: userData });
          await prisma.cycle.create({
            data: {
              userId: user.id,
              month: new Date().getMonth() + 1,
              year: new Date().getFullYear(),
            }
          });
          return true;
        } else {
          return false;
        }
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
