import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-indigo-800 to-purple-600 h-[100px] w-screen shadow-lg flex items-center justify-between px-8">
      <h1 className="text-white font-bold text-3xl">My Blog</h1>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts/about"
              className="text-white hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
