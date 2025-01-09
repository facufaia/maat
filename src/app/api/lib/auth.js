// lib/auth.ts
import NextAuth from 'next-auth'
import SupabaseProvider from 'next-auth/providers/supabase'
import { Database } from '@/types/supabase'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    SupabaseProvider({
      clientId: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      clientSecret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    }
  }
})