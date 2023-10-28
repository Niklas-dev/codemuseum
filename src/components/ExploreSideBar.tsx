"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
} from "react-icons/fa";

export default function ExploreSideBar() {
  const [show, setShow] = useState(false);
  return (
    <div className=" bg-[#0c0c0c] h-3/4 w-72  z-20 rounded-br-xl pb-6 fixed">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center pt-6 px-6">
          <h4 className="text-xl font-medium">Explore</h4> <FaChevronLeft />
        </div>
        <ul className="flex flex-col mt-4  text-gray-300 text-lg">
          <Link
            href={""}
            className="flex flex-row items-center gap-2   hover:bg-[#1a1a1a] border-l-2 border-violet-700 px-6 py-2"
          >
            <FaCode /> Gallery
          </Link>
          <Link
            href={""}
            className="flex flex-row items-center gap-2  hover:bg-[#1a1a1a] px-6 py-2"
          >
            <FaCode /> Articles
          </Link>
          <Link
            href={""}
            className="flex flex-row items-center gap-2  hover:bg-[#1a1a1a] px-6 py-2"
          >
            <FaCode /> Community
          </Link>
        </ul>
      </div>
    </div>
  );
}
