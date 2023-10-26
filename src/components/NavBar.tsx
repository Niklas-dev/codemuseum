"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { data } = useSession();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav
      className={`bg-transparent py-3  flex flex-row justify-between items-center px-12 lg:px-20 z-40 ${
        pathname === "/explore" && "bg-[#181717] shadow-lg"
      }`}
    >
      <Link href={"/"} className="text-2xl font-bold">
        CodeMuseum
      </Link>
      {pathname !== "/sign-in" && (
        <ul className="flex flex-row items-center gap-4 text-lg">
          <Link className="hover:underline" href={"/explore"}>
            Explore
          </Link>
          <Link className="hover:underline" href={"/home"}>
            Highlights
          </Link>
          <Link className="hover:underline" href={"/home"}>
            Share
          </Link>
          <Link className="hover:underline" href={"/home"}>
            About
          </Link>

          {data?.user ? (
            <Link href={"/profile"}>
              <Image
                className="bg-white rounded-full"
                src={data!.user!.image!}
                alt={data!.user!.name!}
                width={50}
                height={50}
              />
            </Link>
          ) : (
            <Link
              className="flex cursor-pointer mb-[4px] w-fit items-center rounded-md border-2 border-black bg-violet-700 px-6 py-1.5 font-medium shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              href={"/sign-in"}
            >
              Sign In
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
}
