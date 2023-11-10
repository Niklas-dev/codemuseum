import ExploreSideBar from "@/components/ExploreSideBar";
import SearchSideBar from "@/components/SearchSideBar";
import type { Metadata } from "next";
import Link from "next/link";
import { FaCode, FaNewspaper, FaUserFriends } from "react-icons/fa";

export const metadata: Metadata = {
  title: "CodeMuseum",
  description: "Code!!!",
};

export default async function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row justify-between relative  w-screen  h-screen overflow-x-hidden mt-20 ">
      <div className="w-[18rem] z-20 absolute lg:relative">
        <div className="hidden lg:flex">
          <ExploreSideBar />
        </div>
        <div className="bg-[#000000] w-full h-fit p-2 bottom-0 fixed lg:hidden flex flex-row gap-2 justify-around items-center text-lg">
          <Link
            href={"/explore/gallery"}
            className="flex flex-col items-center bg-[#111111] hover:bg-[#1a1a1a] p-1 rounded-lg w-1/3 transition-colors"
          >
            <FaCode /> Gallery
          </Link>
          <Link
            href={"/explore/articles"}
            className="flex flex-col items-center bg-[#111111] hover:bg-[#1a1a1a] p-1 rounded-lg w-1/3 transition-colors"
          >
            <FaNewspaper /> Articles
          </Link>
          <Link
            href={"/explore/community"}
            className="flex flex-col items-center bg-[#111111] hover:bg-[#1a1a1a] p-1 rounded-lg w-1/3 transition-colors"
          >
            <FaUserFriends /> Community
          </Link>
        </div>
      </div>
      <main className=" p-4 lg:p-12  h-full w-screen overflow-y-scroll z-10 flex flex-row">
        {children}
      </main>
      <div className="w-[18rem] z-20 relative hidden lg:flex">
        <SearchSideBar />
      </div>
    </section>
  );
}
