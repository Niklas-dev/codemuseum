import {
  BiDotsHorizontalRounded,
  BiHeart,
  BiComment,
  BiShare,
} from "react-icons/bi";
import Image from "next/image";
import { getAuthSession } from "@/lib/auth";
import CodeCardCodeDisplay from "./CodeCardCodeDisplay";

export default async function CodeCard() {
  const session = await getAuthSession();
  return (
    <div className="h-fit w-full bg-[#111111] rounded-xl p-6  flex flex-col">
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
        <div className="flex flex-row gap-2">
          <div className="bg-green-500 px-3 h-8 rounded-lg flex justify-center items-center bg-opacity-40">
            Python
          </div>
          <div className="bg-blue-500 px-3 h-8 rounded-lg flex justify-center items-center bg-opacity-40">
            Django
          </div>
          <div className="bg-orange-500 px-3 h-8 rounded-lg flex justify-center items-center bg-opacity-40">
            Typescript
          </div>
          <div className="bg-red-500 px-3 h-8 rounded-lg flex justify-center items-center bg-opacity-40">
            React
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">This is a cool title</h1>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="  h-fit w-full">
          <CodeCardCodeDisplay language="test" code="test" />
        </div>
        <div className=" h-fit flex flex-row items-center justify-between  relative">
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
  );
}
