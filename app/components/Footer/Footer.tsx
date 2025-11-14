"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto px-6 justify-center flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0">
        
        <div className="flex flex-wrap md:gap-6 gap-4 text-gray-600 text-sm font-medium">
          <Link href="#" className="">About Us</Link>
          <Link href="#" className="">Contact</Link>
          <Link href="#" className="">Privacy Policy</Link>
          <Link href="#" className="">Terms of Service</Link>
        </div>

      </div>
      <div className="text-gray-600 flex justify-center text-sm mt-6 md:mt-4">
          &copy; 2024 News Today. All rights reserved.
        </div>
    </footer>
  );
}
