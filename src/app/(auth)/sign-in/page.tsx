"use client";
import { signIn } from "next-auth/react";
export default function Page() {
  return (
    <div>
      <button onClick={async () => await signIn("google")}>SignIn</button>
    </div>
  );
}
