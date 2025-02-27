import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Hello from about
      <Button variant="secondary">
        <Link href="/">Back </Link>
      </Button>
    </div>
  );
};

export default page;
