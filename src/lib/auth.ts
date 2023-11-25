import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { eq } from "drizzle-orm";
import * as dotenv from "dotenv";
import { Adapter } from "next-auth/adapters";
import { users } from "@/db/schema";
dotenv.config();

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      console.log("token", token);
      console.log("token", user);
      const email = token.email;
      const dbUser = (
        await db
          .select()
          .from(users)
          .where(eq(users.email, email as string))
      )[0];

      console.log("token db", dbUser);
      return {
        ...token,
        ...dbUser,
      };
    },
    async session({ session, user }) {
      console.log("session", session);
      console.log("session", user);
      const email = session.user!.email;
      const dbUser = (
        await db
          .select()
          .from(users)
          .where(eq(users.email, email as string))
      )[0];
      session.user = dbUser;
      console.log("session db", dbUser);

      return session;
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
