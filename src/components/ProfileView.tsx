import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
export default async function ProfileView() {
  const session = await getAuthSession();
  return (
    <div className="px-20 py-8 w-full h-full flex flex-col z-20">
      <div className="flex flex-row gap-8">
        <div className="bg-gray-900 w-full h-[35rem] rounded-2xl">
          <div className="h-52 w-full bg-gray-800 rounded-t-2xl relative">
            <Image
              className="absolute h-32 w-32 rounded-full bg-gray-600  -bottom-14 left-8"
              src={session!.user!.image!}
              width={100}
              height={100}
              alt="avatar"
            />
          </div>
          <div className="pt-16 px-10">
            <h1 className="text-2xl">{session?.user?.name}</h1>
          </div>
        </div>
        <div className="w-[35rem] bg-red-300 rounded-2xl"></div>
      </div>
    </div>
  );
}
