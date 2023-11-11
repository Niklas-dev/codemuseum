import { getAuthSession } from "@/lib/auth";

import Image from "next/image";
export default async function ProfileView() {
  const session = await getAuthSession();
  return (
    <div className="relative h-full w-full z-0">
      <div className="absolute flex items-center justify-center h-full w-full bg-opacity-40 bg-black   z-40">
        <div className="h-[45rem] w-[40rem] bg-red-400 "></div>
      </div>
      <div className="px-20 py-8 w-full h-full flex flex-col z-10">
        <div className="flex flex-row gap-8">
          <div className="bg-[#161616] w-full h-[35rem] rounded-2xl flex flex-col">
            <div className="h-52 w-full bg-[#252525] rounded-t-2xl relative">
              <div className="absolute -bottom-14 left-8">
                <Image
                  className=" h-32 w-32 rounded-full bg-gray-600  "
                  src={session!.user!.image!}
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="pt-16 px-10 flex flex-col items-start justify-between flex-grow pb-8">
              <div className="flex flex-col items-start  ">
                <h1 className="text-2xl font-medium">{session?.user?.email}</h1>
                <p className="text-lg text-gray-200 mt-4">
                  This is a bio about my profile
                </p>
                <p className="text-lg text-gray-300">🇩🇪 Germany, Kiel</p>
                <div className="flex flex-row items-center gap-3 text-lg mt-3">
                  <span className="flex flex-row gap-1 text-gray-300 items-center bg-[#222222] px-3 py-2 rounded-xl">
                    <h1 className="text-blue-400 font-bold text-xl">6032 </h1>{" "}
                    followers
                  </span>
                  <span className="flex flex-row gap-1 text-gray-300 items-center bg-[#222222] px-3 py-2 rounded-xl">
                    <h1 className="text-blue-400 font-bold text-xl">52 </h1>{" "}
                    followed
                  </span>
                </div>
              </div>
              <button className="flex cursor-pointer  w-fit items-center rounded-md border-2 border-black bg-violet-700 px-8 py-2 font-medium shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                Edit
              </button>
            </div>
          </div>
          <div className="w-[35rem] bg-[#161616] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
