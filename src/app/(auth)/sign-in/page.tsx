"use client";
import { signIn, signOut } from "next-auth/react";
export default function Page() {
  return (
    <div>
      <button onClick={async () => await signIn("google")}>SignIn</button>
      <button onClick={async () => await signOut()}>SignOut</button>
    </div>
  );
}
