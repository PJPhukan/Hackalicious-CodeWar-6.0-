import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
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

      <div className="flex w-full justify-end">
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
