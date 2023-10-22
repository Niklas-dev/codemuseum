import type { Metadata } from "next";
import { Inter, MuseoModerno } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";

const museo = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeMuseum",
  description: "Code!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${museo.className} text-white h-full w-full flex flex-col bg-[#050505] overflow-x-hidden `}
      >
        <NavBar />
        <div className="fixed h-full w-full pointer-events-none noise-background "></div>

        {children}
      </body>
    </html>
  );
}
