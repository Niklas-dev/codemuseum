import { TagType } from "@/db/schema";
import Link from "next/link";
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
} from "react-icons/fa";
import { cookies } from "next/headers";
export default async function SearchSideBar() {
  const token = cookies().get("next-auth.session-token")?.value!;
  console.log(token);
  const getTags = async () => {
    const dbTags = (await fetch("http://localhost:3000/api/tags", {
      method: "GET",
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/json",
      }),
    }).then(async (response) => await response.json())) as TagType[];
    console.log(dbTags);

    return dbTags;
  };

  let tags: TagType[] = await getTags();

  return (
    <div className=" bg-[#0c0c0c] h-full w-72  z-40 rounded-br-xl pb-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start items-center pt-6 px-6">
          <h4 className="text-xl font-medium">Frameworks & Tags</h4>{" "}
        </div>
        <ul className="flex flex-col mt-4  text-gray-300 text-lg">
          {tags.map((tag) => (
            <div key={tag.pk}>{tag.name}</div>
          ))}
        </ul>
      </div>
    </div>
  );
}
