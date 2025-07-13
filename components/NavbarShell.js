// File: components/NavbarShell.js

import Link from "next/link";
import { tools } from "../config/tools";
import ClientNavbar from "./ClientNavbar";
import Image from "next/image";

const categories = ["convert", "compress", "utility"];

const NavbarShell = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary flex items-center">
          FreeT
          <Image
          
            src="/images/free-tool-shop-logo1.png"
            alt="free-tool-shop-logo"
            width={16}
            height={16}
          ></Image>
          <Image
          
            src="/images/free-tool-shop-logo1.png"
            alt="free-tool-shop-logo"
            width={16}
            height={16}
          ></Image>
          lShop
        </Link>

        {/* Dynamic Nav links will be handled in ClientNavbar */}
        <nav className="hidden sm:flex sm:space-x-4 text-sm text-gray-700">
          {categories.map((cat) => (
            <div key={cat} className="relative group">
              <button className="block w-full text-left hover:text-green-600 capitalize">
                {cat}
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-40 p-2 hidden group-hover:block group-focus-within:block">
                {tools
                  .filter((tool) => tool.category === cat)
                  .map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {tool.title}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
          <Link href="/about" className="block hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="block hover:text-green-600">
            Contact
          </Link>
        </nav>

        {/* Render mobile toggle and interactivity in ClientNavbar */}
        <div className="sm:hidden">
          <ClientNavbar />
        </div>
      </div>
    </header>
  );
};

export default NavbarShell;
