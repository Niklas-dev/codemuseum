import { db } from "@/db";
import { users } from "../../../db/schema";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { IncomingMessage } from "http";
import { NextApiRequest, NextApiResponse } from "next";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url as string);

  const dbUsers = await db.select().from(users);

  const token = await getToken({ req });
  if (token) {
    const { searchParams } = new URL(req.url as string);
    console.log(searchParams.get("test"));
    const dbUsers = await db.select().from(users);

    return NextResponse.json({ test: dbUsers[0] }, { status: 200 });
  } else {
    // Not Signed in
    return NextResponse.json(
      { Error: "You are not signed in." },
      { status: 401 }
    );
  }
}
