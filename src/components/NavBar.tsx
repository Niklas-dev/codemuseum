import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";
export default async function NavBar() {
  const session = await getAuthSession();
  return (
    <nav className="bg-transparent h-20 flex flex-row justify-between items-center px-20">
      <Link href={"/"} className="text-2xl font-bold">
        CodeMuseum
      </Link>
      <ul className="flex flex-row items-center gap-4 text-lg">
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>Home</Link>
        {session?.user ? (
          <Link href={"/profile"}>
            <Image
              className="bg-white rounded-full"
              src={session?.user.image!}
              alt={session?.user.name!}
              width={50}
              height={50}
            />
          </Link>
        ) : (
          <Link
            className="flex cursor-pointer mb-[4px] w-fit items-center rounded-md border-2 border-black bg-violet-700 px-6 py-1.5 font-medium shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            href={"/sign-in"}
          >
            Sign In
          </Link>
        )}
      </ul>
    </nav>
  );
}
