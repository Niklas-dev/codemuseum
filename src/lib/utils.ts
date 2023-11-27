import { NextApiRequest } from "next";

export async function streamToJson(stream: NextApiRequest["body"]) {
  return new Response(stream).json();
}

export function nullToEmptyString(value: string | null): string {
  if (value === null) return "";
  return value;
}
