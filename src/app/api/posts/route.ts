import { db } from "@/db";
import { users } from "../../../db/schema";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const dbUsers = await db.select().from(users);
  return NextResponse.json({ test: dbUsers[0] }, { status: 200 });
}
