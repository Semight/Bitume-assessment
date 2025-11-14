"use client";

// import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiBell, FiMoon, FiBookOpen } from "react-icons/fi";

export default function Navbar() {
//   const [active, setActive] = useState("Top Stories");

  const navItems = [
    { name: "Top Stories", href: "/" },
    { name: "World", href: "/?category=world" },
    { name: "Politics", href: "/?category=politics" },
    { name: "Business", href: "/?category=business" },
    { name: "Tech", href: "/?category=technology" },
    { name: "Culture", href: "/?category=culture" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <FiBookOpen className="w-7 h-7 text-blue-600" />
          <Link href="/" className="text-2xl font-bold text-gray-900">
            News Today
          </Link>
        </div>

        {/* <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`${
                  active === item.name
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                } transition`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> */}

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>


        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <FiMoon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
          <FiBell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
        </div>
      </div>
    </nav>
  );
}
