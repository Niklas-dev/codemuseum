import ExploreSideBar from "@/components/ExploreSideBar";
import SearchSideBar from "@/components/SearchSideBar";
import type { Metadata } from "next";
import Link from "next/link";
import { FaCode, FaNewspaper, FaUserFriends } from "react-icons/fa";

export const metadata: Metadata = {
  title: "CodeMuseum",
  description: "Code!!!",
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-full w-full mt-20">{children}</section>;
}
