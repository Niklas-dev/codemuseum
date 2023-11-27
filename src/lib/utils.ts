import { NextApiRequest } from "next";

export async function streamToJson(stream: NextApiRequest["body"]) {
  return new Response(stream).json();
}

export function nullToEmptyString(value: string | null): string {
  if (value === null) return "";
  return value;
}

export function areObjectsEqual(
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
