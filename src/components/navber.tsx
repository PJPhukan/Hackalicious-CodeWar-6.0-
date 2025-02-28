import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-5  flex items-center justify-between px-2 md:px-10">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <Link href="/">
          <span className="text-blue-500 text-lg font-semibold">Solacify</span>
        </Link>
      </div>

      <div className="flex items-center md:gap-6 gap-3">
        <Link
          href="/sign-in"
           className="bg-blue-500 hover:bg-blue-600 text-white rounded-full  px-1 md:px-2 py-1 md:text-md text-sm"
        >
          <Button className="bg-transparent hover:bg-transparent">
            {" "}
            Sign In
          </Button>
        </Link>
        <Link
          href="/sign-up"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-1 md:px-2 py-1 md:text-md text-sm"
        >
          <Button className="bg-transparent hover:bg-transparent">
            {" "}
            Sign Up
          </Button>
        </Link>
      </div>

     
    </div>
  );
};

export default Navbar;
