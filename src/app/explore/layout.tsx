import ExploreSideBar from "@/components/ExploreSideBar";
import type { Metadata } from "next";

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
        <ExploreSideBar />
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
