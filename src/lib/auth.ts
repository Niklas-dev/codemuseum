import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import * as dotenv from "dotenv";
dotenv.config();

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(token.email);

      return token;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
