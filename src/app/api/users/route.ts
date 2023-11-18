import { db } from "@/db";
import { posts, tags, updateUserSchema, users } from "../../../db/schema";
import { NextResponse } from "next/server";
import { JWT, getToken } from "next-auth/jwt";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";
import { streamToJson } from "@/lib/utils";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  console.log(token);
  if (token) {
    const dbTags = await db.select().from(tags);

    return NextResponse.json(dbTags, { status: 200 });
  }
  return NextResponse.json(
    { error: "You are not signed in." },
    { status: 401 }
  );
}

export async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  console.log(token);
  if (token) {
    const jsonPost = await streamToJson(req.body);

    try {
      const updateUser = updateUserSchema.parse(jsonPost);
      console.log(updateUser);
      if (!null) {
        return NextResponse.json(
          { error: "Failed to create post." },
          { status: 400 }
        );
      }

      return NextResponse.json(null, { status: 201 });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return NextResponse.json(
          err.issues.map((issue) =>
            Object({ error: `${issue.path} ${issue.message}` })
          ),
          { status: 400 }
        );
      }
      console.error(err);
    }
  }
  return NextResponse.json(
    { error: "You are not signed in." },
    { status: 401 }
  );
}
