import { z } from "zod";

export interface GitHubUser {
  name: string;
  email: string;
  image: string;
};

export const userSchema  = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  image: z.string().url(),
});
