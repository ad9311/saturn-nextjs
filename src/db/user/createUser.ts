import { GitHubUser } from "@/types";
import prisma from "../prisma";

async function createUser(user: GitHubUser) {
  return await prisma.user.create({ data: {...user} })
}

export default createUser;
