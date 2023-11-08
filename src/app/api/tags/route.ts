import { db } from "@/db";
import { tags } from "../../../db/schema";
import { NextResponse } from "next/server";
import { JWT, getToken } from "next-auth/jwt";

import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });
  if (token) {
    const dbTags = await db.select().from(tags);

    return NextResponse.json({ test: dbTags }, { status: 200 });
  }
  return NextResponse.json(
    { error: "You are not signed in." },
    { status: 401 }
  );
}
