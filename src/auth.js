import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { authConfig } from "@/config/auth.config";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
// import { prisma } from "@/lib/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  // ...authConfig,
  providers: [Google, Facebook],
});
