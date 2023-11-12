"use client";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { MuseoModerno } from "next/font/google";
import ProfilePictureDisplay from "./ProfilePictureDisplay";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
const museo = MuseoModerno({ subsets: ["latin"] });
export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const { data } = useSession();
  const pathname = usePathname();
  const session = useSession().data;
  console.log(pathname);
  return (
    <nav
      className={`${
        pathname !== "/" ? "shadow-lg bg-[#111111] fixed" : "bg-transparent"
      } flex flex-row  w-full justify-between items-center px-4 sm:px-12 lg:px-20 z-50 h-20 py-10`}
    >
      <Link href={"/"} className={`text-2xl font-bold ${museo.className}`}>
        CodeMuseum
      </Link>
      <div className="hidden md:block">
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
                <ProfilePictureDisplay image={data!.user!.image!} />
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
      </div>
      <div className="flex md:hidden relative ">
        <div
          className={`z-20 ${
            isOpen ? "fixed top-4 right-4 sm:right-12 lg:right-20" : ""
          }`}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && (
          <div className="fixed top-0 right-0 w-72 h-96  z-0 bg-[#080808] shadow-xl rounded-bl-2xl">
            <div className="p-2 flex flex-col  ">
              <Link
                href={"/profile"}
                className="flex flex-row items-center gap-4 bg-[#202020] p-2 rounded-xl"
              >
                <ProfilePictureDisplay image={session?.user?.image!} />
                <p className="text-lg font-medium">Niklas-dev</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
