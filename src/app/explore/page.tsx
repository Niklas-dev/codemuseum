import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import { FaCommentDots, FaDotCircle } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export default async function Page() {
  const session = await getAuthSession();
  return (
    <div className="flex flex-row gap-12">
      <div className="flex flex-col gap-8 flex-grow ">
        <div className="h-96 bg-[#111111] rounded-xl flex flex-col">
          <div className="flex flex-row w-full p-6 justify-between items-center">
            <div className="flex flex-row gap-2">
              <Image
                className=" h-12 w-12 rounded-full bg-gray-600  "
                src={session!.user!.image!}
                width={50}
                height={50}
                alt="avatar"
              />
              <div className="flex flex-col">
                <p>{session!.user!.name}</p>
                <p className="text-gray-300">2 hours ago</p>
              </div>
            </div>
            <div className="h-10 w-10 bg-[#202020] flex justify-center items-center rounded-full">
              <BiDotsHorizontalRounded size="35px" />
            </div>
          </div>
        </div>
        <div className="h-96 bg-[#222222]"></div>
        <div className="h-96 bg-[#222222]"></div>
      </div>
      <div className="w-80 h-full bg-[#222222]"></div>
    </div>
  );
}
