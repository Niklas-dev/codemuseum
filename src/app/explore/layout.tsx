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
    <section className="flex flex-row h-full w-full ">
      <ExploreSideBar />
      {children}
    </section>
  );
}
