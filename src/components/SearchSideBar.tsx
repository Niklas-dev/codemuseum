import { TagType } from "@/db/schema";

import { cookies } from "next/headers";

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
      <div className="flex flex-col px-6">
        <div className="flex flex-row justify-start items-center pt-6 ">
          <h4 className="text-xl font-medium">Frameworks & Tags</h4>{" "}
        </div>
        <div className="flex flex-row flex-wrap mt-2  text-gray-300 text-lg ">
          {!data.error ? (
            data.dbTags.map((tag) => (
              <div
                className={`bg-[${
                  tag.color ? tag.color : "#ffffff"
                }] w-fit rounded-lg px-3 h-8 text-black flex flex-row items-center bg-opacity-40`}
                key={tag.pk}
              >
                {tag.name}
              </div>
            ))
          ) : (
            <p className="">{data.error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
