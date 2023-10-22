import { getAuthSession } from "@/lib/auth";

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
    <>
      <main className="flex flex-col min-h-screen px-20 justify-center ">
        <h1 className="text-7xl font-semibold  mb-56">
          Discover {"<Code />"} in it&apos;s <br /> best, most beautiful form
        </h1>
      </main>
      <div className="fixed -bottom-64 right-56 blur-[150px] z-10">
        <div className="h-[30rem] w-[50rem] bg-violet-700 rounded-full opacity-40"></div>
      </div>
      <div className="fixed -bottom-56 -right-36 blur-[150px] z-10">
        <div className="h-[35rem] w-[35rem] bg-teal-500 rounded-full opacity-60"></div>
      </div>
      <div className="fixed bottom-56 -right-36 blur-[150px] z-10">
        <div className="h-[25rem] w-[25rem] bg-teal-500 rounded-full opacity-60"></div>
      </div>
    </>
  );
}
