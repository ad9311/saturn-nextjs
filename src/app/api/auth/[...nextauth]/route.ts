import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { createUser, findUserByEmail } from '@/db/user';

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn(data) {
      const user = await findUserByEmail(`${data.user.email}`);
      if (user) {
        return true;
      } else {
        const { name, email, image } = data.user;
        if (name && email && image) {
          const userData = {
            name,
            email,
            image,
          }
          await createUser(userData);
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
