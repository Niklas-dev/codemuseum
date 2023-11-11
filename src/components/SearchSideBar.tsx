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
import { db } from "@/db";
export default async function SearchSideBar() {
  const token = cookies().get("next-auth.session-token")?.value!;

  const getTags = async () => {
    const response = await fetch("http://localhost:3000/api/tags", {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });

    const dbTags = (await response.json()) as TagType[];

    if ("error" in dbTags) {
      return {
        dbTags,
        error: "You are not signed in.",
      };
    }

    return {
      dbTags,
      error: "",
    };
  };

  let data = await getTags();

  return (
    <div className=" bg-[#0c0c0c] h-full w-72  z-40 rounded-br-xl pb-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start items-center pt-6 px-6">
          <h4 className="text-xl font-medium">Frameworks & Tags</h4>{" "}
        </div>
        <ul className="flex flex-col mt-4  text-gray-300 text-lg">
          {!data.error ? (
            data.dbTags.map((tag) => <div key={tag.pk}>{tag.name}</div>)
          ) : (
            <p>{data.error}</p>
          )}
        </ul>
      </div>
    </div>
  );
}
