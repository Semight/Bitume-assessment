"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiBell,
  FiMoon,
  FiBookOpen,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCategoryStore } from "@/app/store/categoryStore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeCategory = useCategoryStore((s) => s.activeCategory);
const setActiveCategory = useCategoryStore((s) => s.setActiveCategory);

  const navItems = [
  "Top Stories",
  "World",
  "Politics",
  "Business",
  "Tech",
  "Culture",
];

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FiBookOpen className="w-7 h-7 text-blue-600" />
          <Link href="/" className="text-2xl font-bold text-gray-900">
            News Today
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
        </button>

        <ul className="hidden md:flex items-center gap-6">
  {navItems.map((cat) => (
    <li key={cat}>
      <button
        onClick={() => setActiveCategory(cat)}
        className={`transition ${
          activeCategory === cat
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-500"
        }`}
      >
        {cat}
      </button>
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

      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 px-6 py-4 space-y-4">
          
          <div className="relative">
            <FiSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <ul className="flex flex-col gap-4">
            {navItems.map((cat) => (
              <li key={cat}>
                <button
        onClick={() => setActiveCategory(cat)}
        className={`transition ${
          activeCategory === cat
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-500"
        }`}
      >
        {cat}
      </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 pt-2">
            <FiMoon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
            <FiBell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
          </div>
        </div>
      )}
    </nav>
  );
}
