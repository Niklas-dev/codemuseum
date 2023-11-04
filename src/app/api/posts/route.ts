import { db } from "@/db";
import { users } from "../../../db/schema";
import { NextResponse } from "next/server";
import { JWT, getToken } from "next-auth/jwt";
import { IncomingMessage } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { getUserOr401 } from "@/lib/utils";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url as string);
  const user = (await getUserOr401(req)) as JWT;
  console.log(user.name);
  const dbUsers = await db.select().from(users);

  console.log(searchParams.get("test"));

  return NextResponse.json({ test: dbUsers }, { status: 200 });
}
