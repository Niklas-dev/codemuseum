import Link from "next/link";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
} from "react-icons/fa";

export default async function SearchSideBar() {
  let tags = [];
  const getTags = async () => {
    tags = await fetch("/api/tags", {
      method: "GET",
      headers: {},
    }).then(async (response) => await response.json());
  };

  return (
    <div className=" bg-[#0c0c0c] h-full w-72  z-40 rounded-br-xl pb-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start items-center pt-6 px-6">
          <h4 className="text-xl font-medium">Frameworks & Tags</h4>{" "}
        </div>
        <ul className="flex flex-col mt-4  text-gray-300 text-lg">{}</ul>
      </div>
    </div>
  );
}
