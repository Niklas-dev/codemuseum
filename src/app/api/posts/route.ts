import { db } from "@/db";
import { insertPostSchema, posts, users } from "../../../db/schema";
import { NextResponse } from "next/server";
import { JWT, getToken } from "next-auth/jwt";
import { IncomingMessage } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { streamToJson } from "@/lib/utils";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { User } from "next-auth";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  if (token) {
    const { searchParams } = new URL(req.url as string);

    const dbUsers = await db.select().from(users);

    console.log(searchParams.get("test"));
    return NextResponse.json({ test: dbUsers }, { status: 200 });
  }
  return NextResponse.json(
    { Error: "You are not signed in." },
    { status: 401 }
  );
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });

  if (token) {
    const jsonPost = await streamToJson(req.body);

    try {
      const post = insertPostSchema.parse(jsonPost);
      const dbUser = (
        await db
          .select()
          .from(users)
          .where(eq(users.email, token.email!))
          .limit(1)
      )[0];
      const dbPost = await db
        .insert(posts)
        .values({
          title: post.title,
          code: post.code,
          authorId: dbUser.pk,
          language: post.language,
          language_short: post.language_short,
        })
        .returning();

      return NextResponse.json(dbPost, { status: 201 });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return NextResponse.json(
          err.issues.map((issue) => issue.message),
          { status: 400 }
        );
      }
      console.log(err);
    }
    return NextResponse.json({ error: "test" }, { status: 200 });
  }

  return NextResponse.json(
    { Error: "You are not signed in." },
    { status: 401 }
  );
}

/*
        title: posts.title,
        code: posts.code,
        authorId: dbUser.pk,
        language: posts.language,
        language_short: posts.language_short,
*/
