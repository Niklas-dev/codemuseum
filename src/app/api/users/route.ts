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

  if (token) {
    const email = token.email;
    const dbUser = (
      await db
        .select()
        .from(users)
        .where(eq(users.email, email as string))
    )[0];

    return NextResponse.json(dbUser, { status: 200 });
  }
  return NextResponse.json(
    { error: "You are not signed in." },
    { status: 401 }
  );
}

export async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });

  if (token) {
    const jsonPost = await streamToJson(req.body);

    try {
      const updateUser = updateUserSchema.parse(jsonPost);
      console.log("update data", updateUser);

      const updatedUser = await db
        .update(users)
        .set({
          name: updateUser.name,
          username: updateUser.username,
          bio: updateUser.bio,
          location: updateUser.location,
        })
        .where(eq(users.pk, 1))
        .returning();
      if (!updatedUser) {
        return NextResponse.json(
          { error: "Failed to update user." },
          { status: 400 }
        );
      }
      
      
      return NextResponse.json(updatedUser, { status: 201 });
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
