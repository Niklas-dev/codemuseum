import { db } from "@/db";
import { tags } from "../../../db/schema";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { NextApiRequest, NextApiResponse } from "next";
import { getUserOr401 } from "@/lib/utils";
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url as string);

  const user = await getUserOr401(req);

  console.log(searchParams.get("test"));
  const dbTags = await db.select().from(tags);

  return NextResponse.json({ test: dbTags }, { status: 200 });
}
