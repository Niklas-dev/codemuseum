"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronLeft, FaCode } from "react-icons/fa";

export default function ExploreSideBar() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  return (
    <div className=" bg-[#0c0c0c] h-3/4 w-72  z-40 rounded-br-xl pb-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center pt-6 px-6">
          <h4 className="text-xl font-medium">Explore</h4> <FaChevronLeft />
        </div>
        <ul className="flex flex-col mt-4  text-gray-300 text-lg">
          <Link
            href={"/explore/gallery"}
            className={`flex flex-row items-center gap-2 hover:bg-[#1a1a1a]  px-6 py-2 ${
              pathname === "/explore/gallery" && "border-l-2 border-violet-700"
            }`}
          >
            <FaCode /> Gallery
          </Link>
          <Link
            href={"/explore/articles"}
            className={`flex flex-row items-center gap-2 hover:bg-[#1a1a1a]  px-6 py-2 ${
              pathname === "/explore/articles" && "border-l-2 border-violet-700"
            }`}
          >
            <FaCode /> Articles
          </Link>
          <Link
            href={"/explore/community"}
            className={`flex flex-row items-center gap-2 hover:bg-[#1a1a1a]  px-6 py-2 ${
              pathname === "/explore/community" &&
              "border-l-2 border-violet-700"
            }`}
          >
            <FaCode /> Community
          </Link>
        </ul>
      </div>
    </div>
  );
}
