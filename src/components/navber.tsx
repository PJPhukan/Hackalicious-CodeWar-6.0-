import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-5 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <Link href="/">
          <span className="text-blue-500 text-lg font-semibold">Solacify</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/sign-in"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-2 text-sm"
        >
          <Button className="bg-transparent hover:bg-transparent">
            {" "}
            Sign In
          </Button>
        </Link>
        <Link
          href="/sign-up"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-2 text-sm"
        >
          <Button className="bg-transparent hover:bg-transparent">
            {" "}
            Sign Up
          </Button>
        </Link>
      </div>

      <Button variant="ghost" className="md:hidden" size="icon">
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </Button>
    </div>
  );
};

export default Navbar;
