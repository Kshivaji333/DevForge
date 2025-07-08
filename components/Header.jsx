"use client";
import React from "react";
import NavBar from "./NavBar";
import ThemeTougle from "./ThemTougle";
import SignIn from "./signIn/SignIn.jsx";
import { SessionProvider } from "next-auth/react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">DevForge</h1>
      <div className="flex gap-4">
        <NavBar />
        <ThemeTougle />
        <SessionProvider>
          <SignIn />
        </SessionProvider>
      </div>
    </header>
  );
}

export default Header;
