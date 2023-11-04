import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function getUserOr401(req: NextApiRequest) {
  const token = await getToken({ req });
  if (token) {
    return token;
  } else {
    return NextResponse.json(
      { Error: "You are not signed in." },
      { status: 401 }
    );
  }
}
