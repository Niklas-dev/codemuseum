import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-transparent h-20 flex flex-row justify-between items-center px-20">
      <h1 className="text-2xl font-bold">CodeMuseum</h1>
      <ul className="flex flex-row items-center gap-4 text-lg">
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>Home</Link>
        <Link href={"/home"}>Home</Link>
      </ul>
    </nav>
  );
}
