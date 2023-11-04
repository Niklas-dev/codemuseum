import { db } from "@/db";
import { tags } from "../../../db/schema";
import { NextResponse } from "next/server";
import { JWT, getToken } from "next-auth/jwt";

import { NextApiRequest, NextApiResponse } from "next";
import { getUserOr401 } from "@/lib/utils";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const user = (await getUserOr401(req)) as JWT;

  const dbTags = await db.select().from(tags);

  return NextResponse.json({ test: dbTags }, { status: 200 });
}
