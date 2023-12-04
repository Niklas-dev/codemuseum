import { db } from "@/db";
import { insertPostSchema, posts, users } from "../../../db/schema";
import { NextResponse } from "next/server";
import { JWT, getToken } from "next-auth/jwt";
import { IncomingMessage } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { streamToJson } from "@/lib/utils";
import { z } from "zod";
import { eq } from "drizzle-orm";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  if (token) {
    const { searchParams } = new URL(req.url as string);
    console.log(searchParams.get("page"));
    const page = +searchParams.get("page")!;

    const limit = 5;

    const offset = (page - 1) * limit;
    const dbPosts = await db.select().from(posts).limit(limit).offset(offset);

    return NextResponse.json(dbPosts, { status: 200 });
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
      const newPost = insertPostSchema.parse(jsonPost);
      const dbUser = (
        await db
          .select()
          .from(users)
          .where(eq(users.email, token.email!))
          .limit(1)
      )[0];

      const dbPost = (
        await db
          .insert(posts)
          .values({
            title: newPost.title,
            code: newPost.code,
            authorId: dbUser.pk,
            language: newPost.language,
            language_short: newPost.language_short,
          })
          .returning()
      )[0];

      if (!dbPost) {
        return NextResponse.json(
          { error: "Failed to create post." },
          { status: 400 }
        );
      }

      return NextResponse.json(dbPost, { status: 201 });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return NextResponse.json(
          err.issues.map((issue) => Object({ error: issue.message })),
          { status: 400 }
        );
      }
      console.error(err);
    }
    return NextResponse.json({ error: "test" }, { status: 200 });
  }

  return NextResponse.json(
    { error: "You are not signed in." },
    { status: 401 }
  );
}
