import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: "jwt",
  // },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ account, profile }) {
      console.log(profile);
      return true;

      // if (account?.provider === "google") {
      //   return profile.email_verified && profile.email.endsWith("@example.com")
      // }
      // return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
    //   CredentialsProvider({
    //     name: 'as Guest',
    //     credentials: {},
    //     async authorize(credentials) {
    //       const user = {
    //         id: Math.random().toString(),
    //         name: 'Guest',
    //         email: 'guest@example.com',
    //       };
    //       return user;
    //     },
    //   }),
    // ],
    // callbacks: {
    //   async signIn({ user }) {
    //     // block signin if necessary
    //     return true;
    //   }
    // },
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
