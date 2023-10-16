import type { GitHubUser } from "@/types/user";
import prisma from "./prisma";
import { userSchema } from '@/types/user';

async function createUpdateUser(gitHubUser: GitHubUser) {
  if (gitHubUser) {
    const validation = userSchema.safeParse(gitHubUser);
    if (validation.success && gitHubUser.name && gitHubUser.email && gitHubUser.image) {
      const userData = {
        name: gitHubUser.name,
        email: gitHubUser.email,
        image: gitHubUser.image,
      }

      return await prisma.user.findUnique({ where: { email: userData.email }}).then( async (user) => {
        if (user) {
          return await prisma.user.update({ where: { email: userData.email }, data: { ...userData }});
        } else {
          return await prisma.user.create({ data: {...userData} })
        }
      })
    }

    return null;
  }

  return null;
}

export default createUpdateUser;
