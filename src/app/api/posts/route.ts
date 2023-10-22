import { db } from "@/db";
import { users } from "../../../db/schema";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const dbUsers = await db.select().from(users);
  return Response.json({ test: dbUsers[0] }, { status: 200 });
}
