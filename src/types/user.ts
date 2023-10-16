import { z } from "zod";

export type GitHubUser = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | undefined;

export const userSchema  = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  image: z.string().url(),
});
