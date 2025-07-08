import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const data = await getServerSession(authOptions);
  if(data?.user){
    redirect("/dashboard");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to DevForge!</h1>
      <p className="mt-4">
        This is a simple Next.js application styled with Tailwind CSS.
      </p>
      <p className="mt-2">Enjoy building your projects!</p>
    </div>
  );
}
