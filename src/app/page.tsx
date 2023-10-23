import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import type { Metadata } from "next";
import LottieJson from "../../public/landing_anim.json";
import LottiePlayer from "@/components/LottiePlayer";
import CodeSampleShowcase from "@/components/CodeSampleShowcase";
import WeLoveCodeShowcase from "@/components/WeLoveCodeShowcase";
import GreatFeaturesShowcase from "@/components/GreatFeaturesShowcase";

export const metadata: Metadata = {
  title: "CodeMuseum",
  description: "Code!!!!",
};
export default async function Home() {
  const session = await getAuthSession();
  return (
    <>
      <main className="flex flex-col min-h-screen px-10 md:px-12 lg:px-20 justify-start z-20">
        <div className="flex flex-row items-center h-screen mt-20 lg:mt-14 xl:mt-4  ">
          <div className="mb-40 flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl  lg:text-5xl xl:text-6xl 2xl:7xl font-semibold text-center md:text-start">
              Discover {"<Code />"} in it&apos;s <br /> best, most beautiful
              form
            </h1>
            <h2 className="text-gray-300 text-base md:text-lg lg:text-xl text-center md:text-start">
              Find awesome and asthetic code snippets. That are useful, short or
              maybe just look good <br className="hidden md:block" /> to the
              eye.
            </h2>
            <div className="flex flex-row justify-center md:justify-start gap-6 mt-10">
              <Link
                className="flex cursor-pointer w-fit items-center text-sm md:text-base rounded-md border-2 border-black bg-violet-700 px-8 py-3 font-bold shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                href={"/explore"}
              >
                Enter the Museum
              </Link>
              <Link
                className="flex cursor-pointer w-fit items-center text-sm md:text-base rounded-md border-2 border-white bg-transparent px-8 py-3 font-bold shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                href={"/explore"}
              >
                Exhibit your Code
              </Link>
            </div>
          </div>
          <div className="ml-56 z-20 hidden lg:block">
            <LottiePlayer
              speed={1}
              style="lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px]"
              json={LottieJson}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-64">
          <CodeSampleShowcase />
          <WeLoveCodeShowcase />
          <GreatFeaturesShowcase />
        </div>
      </main>
      <div className="fixed -bottom-64 right-56 blur-[150px] z-10 pointer-events-none">
        <div className="h-[30rem] w-[50rem] bg-violet-700 rounded-full opacity-40"></div>
      </div>
      <div className="fixed -bottom-56 -right-36 blur-[150px] z-10 pointer-events-none">
        <div className="h-[35rem] w-[35rem] bg-teal-500 rounded-full opacity-60"></div>
      </div>
      <div className="fixed bottom-56 -right-36 blur-[150px] z-10 pointer-events-none">
        <div className="h-[25rem] w-[25rem] bg-teal-500 rounded-full opacity-60"></div>
      </div>
    </>
  );
}
