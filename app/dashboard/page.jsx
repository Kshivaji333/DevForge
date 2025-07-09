import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import TestPost from "@/components/TestPost";

const dashboard = async () => {
  const data = await getServerSession(authOptions);

  if (!data?.user.name) {
    redirect("/");
  }

  return ( 
   <section>
    <p>Hello,{data?.user.name}</p>
      <p>Email: {data?.user.email}</p>
      <img
        src={data?.user.image}
        alt="profile"
        className="w-[69px] rounded-full"
      />
      <TestPost></TestPost>
   </section>
  );
};

export default dashboard;
