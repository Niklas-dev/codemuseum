import ExploreSideBar from "@/components/ExploreSideBar";
import type { Metadata } from "next";
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
        <div className="bg-[#000000] w-full h-fit py-2 bottom-0 fixed lg:hidden flex flex-row justify-around items-center text-lg">
          <div className="flex flex-col items-center">
            <FaCode /> Gallery
          </div>
          <div className="flex flex-col items-center">
            <FaNewspaper /> Articles
          </div>
          <div className="flex flex-col items-center">
            <FaUserFriends /> Community
          </div>
        </div>
      </div>
      <main className=" p-4 lg:p-12  h-full w-screen overflow-y-scroll z-10 flex flex-row">
        {children}
      </main>
      <div className="w-[18rem] z-20 relative hidden lg:flex">
        <ExploreSideBar />
      </div>
    </section>
  );
}
