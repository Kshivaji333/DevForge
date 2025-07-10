"use client";
import React from "react";
import NavBar from "./NavBar";
import { SessionProvider } from "next-auth/react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">DevForge</h1>
      <div className="flex gap-4">
        <SessionProvider>
          <NavBar />
        </SessionProvider>
      </div>
    </header>
  );
}

export default Header;
