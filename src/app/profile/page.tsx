"use client";
import { signOut } from "next-auth/react";

export default function page() {
  return (
    <div>
      Profile
      <button
        className="flex cursor-pointer w-fit items-center text-sm md:text-base rounded-md border-2 border-black bg-violet-700 px-8 py-3 font-bold shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}
