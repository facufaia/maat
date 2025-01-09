// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";
// import { compare } from "bcryptjs";
// import authConfig from "@/config/auth.config";
import { handlers } from "../../../../auth";

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       profile(profile) {
//         return {
//           id: profile.sub,
//           email: profile.email,
//           name: profile.name,
//           image: profile.picture,
//           role: "patient", // Default role for OAuth providers
//           profileCompleted: false,
//         };
//       },
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//       profile(profile) {
//         return {
//           id: profile.id,
//           email: profile.email,
//           name: profile.name,
//           image: profile.picture.data.url,
//           role: "patient",
//           profileCompleted: false,
//         };
//       },
//     }),
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Invalid credentials");
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//           select: {
//             id: true,
//             email: true,
//             password: true,
//             role: true,
//             profileCompleted: true,
//           },
//         });

//         if (!user || !user.password) {
//           throw new Error("Invalid credentials");
//         }

//         const isPasswordValid = await compare(
//           credentials.password,
//           user.password
//         );

//         if (!isPasswordValid) {
//           throw new Error("Invalid credentials");
//         }

//         return {
//           id: user.id,
//           email: user.email,
//           role: user.role,
//           profileCompleted: user.profileCompleted,
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (user) {
//         token.role = user.role;
//         token.id = user.id;
//         token.profileCompleted = user.profileCompleted;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.role = token.role;
//         session.user.profileCompleted = token.profileCompleted;
//       }
//       return session;
//     },
//     async signIn({ user, account }) {
//       if (account?.provider === "google" || account?.provider === "facebook") {
//         try {
//           const existingUser = await prisma.user.findUnique({
//             where: { email: user.email },
//           });

//           if (!existingUser) {
//             await prisma.user.create({
//               data: {
//                 email: user.email,
//                 name: user.name,
//                 image: user.image,
//                 role: "patient",
//                 profileCompleted: false,
//               },
//             });
//           }
//           return true;
//         } catch (error) {
//           console.error("Error during OAuth sign in:", error);
//           return false;
//         }
//       }
//       return true;
//     },
//   },
//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },
//   session: {
//     strategy: "jwt",
//   },
// };

// const handler = NextAuth(authConfig);
export const { GET, POST } = handlers;
