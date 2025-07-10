"use client";
import { useState } from "react";
import SignInPopUp from "./SignInPopUp";
import { signOut, useSession } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  return (
    <section>
      <button className="cursor-pointer" onClick={() => setIsPopUpOpen(true)}>
          Sign In
        </button>
      {isPopUpOpen && <SignInPopUp setIsPopUpOpen={setIsPopUpOpen} />}
    </section>
  );
};

export default SignIn;
