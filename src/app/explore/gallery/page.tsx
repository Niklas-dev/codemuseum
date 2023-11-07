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
import SpotLightWrapper from "@/components/SpotLightWrapper";
export default async function Page() {
  const session = await getAuthSession();
  return (
    <div className="flex flex-col gap-8 h-fit w-full pb-20">
      <NewCodePost image={session!.user!.image!} />
      <SpotLightWrapper className="h-fit w-fit">
        <CodeCard />
      </SpotLightWrapper>
    </div>
  );
}
