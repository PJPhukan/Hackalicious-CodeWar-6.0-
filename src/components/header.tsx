import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-slate-50 py-16 px-2 md:px-15">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="text-gray-700">Health Matters</span>
              <span className="ml-2 text-red-500">❤️</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-blue-500">One Step Solution</span>
                <br />
                <span className="text-gray-900">
                  for all your healthy needs.
                </span>
              </h1>

              <p className="text-gray-600 max-w-md">
                For smart companion for the lows and highs. A emphatetic friend
                who understands your emotions.
              </p>
            </div>

            <Link
              href="/sign-in"
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full mt-4"
            >
              <Button className="bg-transparent hover:bg-transparent">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="hidden md:block relative">
            {/* <div className="relative h-[400px] w-[400px]">
              <Image
                src="/doctor.jpg"
                alt="Doctor with laptop"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div> */}
            <div className="relative h-[500px] w-[800px] overflow-hidden rounded-2xl">
              <Image
                src="/doctor.png"
                alt="Doctor with laptop"
             fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
