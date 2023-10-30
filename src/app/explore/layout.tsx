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
    <section className="flex flex-row  w-full  h-screen overflow-hidden">
      <div className="w-[18rem] mt-20">
        <ExploreSideBar />
      </div>
      <main className="p-12 h-full flex-grow mt-20  overflow-y-scroll">
        {children}
      </main>
      <div className="w-[18rem] mt-20">
        <ExploreSideBar />
      </div>
    </section>
  );
}
