import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import { FaCommentDots, FaDotCircle, FaHeart } from "react-icons/fa";
import {
  BiComment,
  BiCommentX,
  BiDotsHorizontalRounded,
  BiHeart,
  BiShare,
} from "react-icons/bi";
export default async function Page() {
  const session = await getAuthSession();
  return (
    <div className="flex flex-row gap-12">
      <div className="flex flex-col gap-8 flex-grow ">
        <div className="h-fit w-full bg-[#181818] rounded-xl p-6  flex flex-col">
          <div className="flex flex-row w-full justify-between items-center">
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
            <button className="p-1 flex justify-center items-center rounded-full">
              <BiDotsHorizontalRounded size="35px" />
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className=" bg-gray-600 h-64 w-full"></div>
            <div className=" h-16 flex flex-row items-center justify-between  relative">
              <div className="flex flex-row items-center gap-10   w-full h-fit ">
                <div className="flex flex-row">
                  <Image
                    className="bg-[#181818] p-0.5 h-8 w-8 rounded-full   "
                    src={session!.user!.image!}
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <Image
                    className="bg-[#020101] p-0.5 h-8 w-8 rounded-full absolute translate-x-4"
                    src={session!.user!.image!}
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                  <Image
                    className="bg-[#181818] p-0.5 h-8 w-8 rounded-full absolute translate-x-8"
                    src={session!.user!.image!}
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                </div>
                <h3 className="text-lg font-medium">+ 20 Likes</h3>
              </div>
              <div className="flex flex-row gap-4">
                <button className="flex flex-row items-center text-lg gap-1">
                  <BiHeart size="25px" /> Like
                </button>
                <button className="flex flex-row items-center text-lg gap-1">
                  <BiComment size="25px" /> Comments
                </button>
                <button className="flex flex-row items-center text-lg gap-1">
                  <BiShare size="25px" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-full bg-[#222222]"></div>
    </div>
  );
}
