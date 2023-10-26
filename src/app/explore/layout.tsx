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
    <section className="flex flex-row h-full w-full mt-20">
      <div className="w-[18rem]">
        <ExploreSideBar />
      </div>
      <main className="p-12 bg-red-600 h-fit flex-grow ">{children}</main>
      <div className="w-[18rem]">
        <ExploreSideBar />
      </div>
    </section>
  );
}
