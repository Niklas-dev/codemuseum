"use client";
import LottiePlayer from "@/components/LottiePlayer";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import LottieJson from "../../../../public/login_anim2.json";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
export default function Page() {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.user) {
      router.push("/");
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.user]);

  return (
    <main className="flex flex-col items-center">
      <div className="pointer-events-none">
        <LottiePlayer
          style="lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px]"
          json={LottieJson}
        />
      </div>
      <p className="text-xl">login with</p>
      <div className={`${inter.className} flex flex-col gap-3 pt-2  pb-8`}>
        <button
          onClick={async () => {
            await signIn("github");
          }}
          className="flex flex-row text-lg gap-3 cursor-pointer w-fit items-center   rounded-md border-2 border-white bg-transparent px-16 py-3 font-bold shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          <FaGithub size="25px" />
          GitHub
        </button>
        <button
          onClick={async () => {
            await signIn("google");
          }}
          className="flex flex-row text-lg gap-3 cursor-pointer w-fit items-center  rounded-md border-2 border-white bg-transparent px-16 py-3 font-bold shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          <FaGoogle size="25px" /> Google
        </button>
      </div>
      <Link className="text-xl hover:underline" href={"/"}>
        back to home
      </Link>
    </main>
  );
}
