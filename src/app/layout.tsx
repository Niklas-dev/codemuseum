import type { Metadata } from "next";
import { Inter, MuseoModerno } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import { getAuthSession } from "@/lib/auth";
import SessionProvider from "@/components/SessionProvider";

const museo = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeMuseum",
  description: "Code!!!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();
  return (
    <html lang="en">
      <body
        className={`${museo.className} text-white h-screen w-screen  flex flex-col bg-[#050505] overflow-x-hidden  `}
      >
        <SessionProvider session={session}>
          <NavBar />
          <div className="fixed h-full  w-full pointer-events-none noise-background  "></div>

          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
