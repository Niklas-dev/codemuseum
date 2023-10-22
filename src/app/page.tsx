import { getAuthSession } from "@/lib/auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeMuseum",
  description: "Code!!!!",
};
export default async function Home() {
  const session = await getAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/sign-in"}>Sign-In</Link>
      <pre>user: {session?.user?.name}</pre>
      <Image
        src={session?.user?.image!}
        width={100}
        height={100}
        alt="avatar"
      />
    </main>
  );
}
