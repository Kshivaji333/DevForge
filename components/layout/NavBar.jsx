"use client";

import { signOut, useSession } from "next-auth/react";
import ThemeTougle from "../ui/theme/ThemTougle";
import SignIn from "../signIn/SignIn";

function NavBar() {
  const { data: session } = useSession();
  const userProfileImage = (
    <div className="w-8 rounded-full overflow-hidden">
      <img
        className="w-full"
        src={session?.user?.image || "./images/profile-image-fallback.png"}
      />
    </div>
  );
  return (
    <nav className="dark:text-black">
      {session?.user.name ? (
        <div className="group relative w-20 flex items-center justify-end">
          {userProfileImage}
          <div className="hidden flex-col absolute top-8 right-1 bg-gray-200 p-1 rounded-lg group-hover:flex">
            <ul>
              <li className="px-2 hover:bg-gray-300 rounded-lg py-1">
                <ThemeTougle />
              </li>
              <li >
                <button
                  className="cursor-pointer px-2 py-1 rounded-lg hover:bg-red-500"
                  onClick={() => signOut({ callback: "/" })}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </nav>
  );
}

export default NavBar;
