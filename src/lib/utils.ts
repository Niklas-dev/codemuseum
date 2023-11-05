import { NextApiRequest } from "next";

export async function streamToJson(stream: NextApiRequest["body"]) {
  return new Response(stream).json();
}
