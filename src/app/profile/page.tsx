import ProfileView from "@/components/ProfileView";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/sign-in");
  }

  return (
    <div className="h-full">
      <ProfileView />
    </div>
  );
}
