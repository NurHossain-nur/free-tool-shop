"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "../config/tools";

const categories = ["convert", "compress", "utility"];

export default function ClientNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (cat) => {
    setActiveMenu(activeMenu === cat ? null : cat);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-gray-700 focus:outline-none"
      >
        ☰
      </button>

      {/* Sliding Menu (Positioned under navbar) */}
      <div
        className={`absolute left-0 right-0 top-[72px] z-40 bg-white shadow-md border-t sm:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="p-4 space-y-2">
          {categories.map((cat) => (
            <div key={cat}>
              <button
                onClick={() => toggleSubMenu(cat)}
                className="w-full text-left capitalize font-medium text-gray-700 hover:text-green-600"
              >
                {cat}
              </button>
              {activeMenu === cat && (
                <div className="ml-4 mt-1 space-y-1">
                  {tools
                    .filter((tool) => tool.category === cat)
                    .map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/${tool.slug}`}
                        className="block text-sm text-gray-600 hover:text-green-600"
                      >
                        {tool.title}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/about" className="block text-gray-700 hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-green-600">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
