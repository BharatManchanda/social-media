"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          SocialApp
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium hover:text-blue-600">
            Explore
          </Link>
          <Link href="/messages" className="text-sm font-medium hover:text-blue-600">
            Messages
          </Link>

          {/* Auth Buttons */}
          <Link
            href="/login"
            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}