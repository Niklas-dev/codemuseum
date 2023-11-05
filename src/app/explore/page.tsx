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
import CodeCard from "@/components/CodeCard";
import NewCodePost from "@/components/NewCodePost";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await getAuthSession();
  return redirect("/explore/gallery");
}
