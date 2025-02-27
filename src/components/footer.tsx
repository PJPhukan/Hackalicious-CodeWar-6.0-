import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, PinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex items-center gap-1 text-blue-600 font-medium text-xl mb-4">
          Solacify
          <span className="text-red-500">
          </span>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm mb-4">
          <Link href="/about" className="hover:text-blue-500 transition-colors">About us</Link>
          <Link href="/features" className="hover:text-blue-500 transition-colors">Features</Link>
          <Link href="/signin" className="hover:text-blue-500 transition-colors">Sign in</Link>
        </div>

        {/* Secondary Navigation */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs mb-4">
          <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms & conditions</Link>
          <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy policy</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>

        <div className="border-t border-gray-200 w-full my-4"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 mb-4">
          <Link href="#" className="bg-white p-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
            <Facebook size={18} />
          </Link>
          <Link href="#" className="bg-white p-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
            <Instagram size={18} />
          </Link>
          <Link href="#" className="bg-white p-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
            <Twitter size={18} />
          </Link>
          <Link href="#" className="bg-white p-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
            <PinIcon size={18} />
          </Link>
          <Link href="#" className="bg-white p-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
            <Youtube size={18} />
          </Link>
          <Link href="#" className="bg-white p-2 rounded-full text-blue-500 hover:bg-blue-100 transition-colors">
            <Mail size={18} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Solacify All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
