import { db } from "@/db";
import {
  insertPostSchema,
  users,
  posts,
  likes,
  insertLikeSchema,
} from "@/db/schema";
import { streamToJson } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

import { z } from "zod";
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });

  if (token) {
    const jsonLike = await streamToJson(req.body);

    try {
      const newLike = insertLikeSchema.parse(jsonLike);
      const userPk = (
        await db
          .select({
            userPk: users.pk,
          })
          .from(users)
          .where(eq(users.email, token.email!))
          .limit(1)
      )[0].userPk;
      console.log("test1");

      const dbLike = (
        await db
          .insert(likes)
          .values({
            userPk: userPk,
            postPk: newLike.postPk,
          })
          .returning()
          .onConflictDoNothing()
      )[0];

      if (!dbLike) {
        return NextResponse.json(
          { error: "Post does not exist or already liked." },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { ...dbLike, message: "Like added to post." },
        { status: 201 }
      );
    } catch (err) {
      if (err instanceof z.ZodError) {
        return NextResponse.json(
          err.issues.map((issue) => issue.message),
          { status: 400 }
        );
      }
      console.error(err);
      return NextResponse.json(
        { error: "An error occurred." },
        { status: 400 }
      );
    }
  } //improve error handling

  return NextResponse.json(
    { Error: "You are not signed in." },
    { status: 401 }
  );
}
